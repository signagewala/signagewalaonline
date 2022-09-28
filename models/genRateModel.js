import { Schema, model, models } from "mongoose";

const genRateSchema = new Schema({
  description: String,
  width: Number,
  height: Number,
  rate: Number,
  unit: String,
  measureunit: String,
  calcfactor: Number,
  img: String,
});

const Rates = models.Rates || model("Rates", genRateSchema);

export default Rates;
