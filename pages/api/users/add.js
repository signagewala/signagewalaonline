import connectMongo from "../../../utils/connectMongo";
import Nuser from "../../../models/userModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addUser(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const data = await Nuser.create(req.body);
    console.log(req.body);
    console.log("CREATED DOCUMENT");

    res.json({ data });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
