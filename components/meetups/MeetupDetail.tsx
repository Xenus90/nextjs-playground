import classes from './MeetupDetail.module.css';
import Image from 'next/image';

const MeetupDetail = (props: any) => {
    return (
        <section className={classes.detail}>
            <Image
                src={props.image}
                alt={props.description}
                height={400}
                width={800} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    );
};

export default MeetupDetail;
