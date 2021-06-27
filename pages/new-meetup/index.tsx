import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
    const router = useRouter();

    const addMeetupHandler = async (data: any) => {
        await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        router.push('/');
    };

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
};

export default NewMeetupPage;
