import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  fname: String,
  lname: String,
  status: String,
  cname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number, required: true },
  pass: { type: String, required: true },
  type: String,
});

const Nuser = models.Nuser || model("Nuser", userSchema);

export default Nuser;
