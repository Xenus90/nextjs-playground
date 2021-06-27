import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

type Props = {
    meetup: {
        image: string,
        description: string,
        title: string,
        address: string,
    },
};

const MeetupDetails = (props: Props) => {
    return (
        <MeetupDetail 
            image={props.meetup.image}
            description={props.meetup.description}
            title={props.meetup.title}
            address={props.meetup.address} />
    );
};

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://vladimir:vladimir@nodejsatlas.tiqxb.mongodb.net/nextJsMeetups?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await (await meetupsCollection.find().toArray()).map(meetup => ({ id: meetup._id.toString() }))
    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({ params: { meetupId: meetup.id } }))
    };
}

export async function getStaticProps(context: any) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://vladimir:vladimir@nodejsatlas.tiqxb.mongodb.net/nextJsMeetups?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });
    client.close();

    return {
        props: {
            meetup: {
                id: meetup._id.toString(),
                image: meetup.image,
                title: meetup.title,
                address: meetup.address,
                description: meetup.description,
            }
        },
    };
}

export default MeetupDetails;