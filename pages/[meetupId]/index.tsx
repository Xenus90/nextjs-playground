import MeetupDetail from '../../components/meetups/MeetupDetail';

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
            image='https://i1.wp.com/www.touristisrael.com/wp-content/uploads/2020/06/Best-areas-to-stay-in-Tel-Aviv-scaled-e1593008399620.jpg?w=1506&ssl=1'
            description='My first meetup!'
            title='First meetup'
            address='some street, some city' />
    );
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    };
}

export async function getStaticProps(context: any) {
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetup: {
                image: 'https://i1.wp.com/www.touristisrael.com/wp-content/uploads/2020/06/Best-areas-to-stay-in-Tel-Aviv-scaled-e1593008399620.jpg?w=1506&ssl=1',
                description: 'My first meetup!',
                title: 'First meetup',
                address: 'some street, some city',
            },
        },
    };
}

export default MeetupDetails;