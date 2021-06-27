import { MongoClient } from 'mongodb';

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect('mongodb+srv://vladimir:vladimir@nodejsatlas.tiqxb.mongodb.net/nextJsMeetups?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        await meetupsCollection.insertOne(data);
        client.close();

        res.status(201).json({ message: 'Meetup created' });
    }
}