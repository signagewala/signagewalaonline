import connectMongo from "../../../utils/connectMongo";
import Rates from "../../../models/genRateModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function editRates(req, res) {
  try {
    console.log(req.body);
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("UPDATING DOCUMENT");
    const data = await Rates.findOneAndUpdate(
      {
        _id: req.body.id,
      },
      { rate: req.body.rate }
    );
    console.log("UPDATED DOCUMENT");

    res.json({ data });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
