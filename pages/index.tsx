import MeetupList from '../components/meetups/MeetupList';
import { NextApiRequest, NextApiResponse } from 'next';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://i1.wp.com/www.touristisrael.com/wp-content/uploads/2020/06/Best-areas-to-stay-in-Tel-Aviv-scaled-e1593008399620.jpg?w=1506&ssl=1',
        address: 'Some street, Some city',
        description: 'Some description',
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://i1.wp.com/www.touristisrael.com/wp-content/uploads/2020/06/Best-areas-to-stay-in-Tel-Aviv-scaled-e1593008399620.jpg?w=1506&ssl=1',
        address: 'Some street, Some city',
        description: 'Some description',
    },
];

type Props = {
    meetups: { id: string, title: string, image: string, address: string, description: string }[];
};

const HomePage = (props: Props) => {
    return (
        <MeetupList meetups={props.meetups} />
    );
};

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS,
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
