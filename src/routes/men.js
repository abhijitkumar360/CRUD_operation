import express from "express";
import { MensRanking } from "../models/mens.js";

const router = express.Router();
router.get("/", async (req, res) => {
  res.send("hello abhijit");
});

router.post("/mens", async (req, res) => {
  try {
    const user = new MensRanking(req.body);
    console.log(req.body);
    const insert = await user.save();
    res.status(200).send(insert);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/mens", async (req, res) => {
  try {
    const insert = await MensRanking.find({}).sort({ ranking: 1 });
    res.status(200).send(insert);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const insert = await MensRanking.findById({ _id });
    res.status(200).send(insert);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const insert = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(insert);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const insert = await MensRanking.findByIdAndDelete(req.params.id);
    res.status(200).send(insert);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

export default router;
