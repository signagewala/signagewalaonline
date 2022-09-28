import connectMongo from "../../../utils/connectMongo";
import Rates from "../../../models/genRateModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addRate(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const data = await Rates.create(req.body);
    console.log(req.body);
    console.log("CREATED DOCUMENT");

    res.json({ data });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
