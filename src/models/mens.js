import mongoose from "mongoose";

const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    require: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
    trime: true,
  },
  dob: {
    type: String,
    require: true,
    trime: true,
  },
  country: {
    type: String,
    require: true,
    trime: true,
  },
  score: {
    type: Number,
    require: true,
    trime: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});

export const MensRanking = new mongoose.model("MenRanking", menSchema);
