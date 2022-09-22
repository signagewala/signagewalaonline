// posts.js

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("nextjs-mongodb-demo");
    switch (req.method) {
        case "POST":
            let bodyObject = JSON.parse(req.body);
            let myPost = await db.collection("users").insertOne(bodyObject);
            res.json(myPost.ops[0]);
            break;
        case "GET":
            const users = await db.collection("users").find({}).toArray();
            res.json({ status: 200, data: users });
            break;
    }
}