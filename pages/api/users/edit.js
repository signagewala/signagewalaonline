import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/userModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function editUser(req, res) {
  try {
    console.log(req.body);
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("UPDATING DOCUMENT");
    const data = await User.findOneAndUpdate(
      {
        _id: req.body.id,
      },
      { status: req.body.status }
    );
    console.log("UPDATED DOCUMENT");

    res.json({ data });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
