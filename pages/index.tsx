import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

type Props = {
    meetups: { id: string, title: string, image: string, address: string, description: string }[];
};

const HomePage = (props: Props) => {
    return (
        <>
            <Head>
                <title>React MeetUps</title>
                <meta name="description" content="Browse a huge list of highly active React meetups!" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    );
};

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://vladimir:vladimir@nodejsatlas.tiqxb.mongodb.net/nextJsMeetups?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 3600,
    };
}

// export async function getServerSideProps(context: { req: NextApiRequest; res: NextApiResponse<any>; }) {
//     const req: NextApiRequest = context.req;
//     const res: NextApiResponse = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }

export default HomePage;
