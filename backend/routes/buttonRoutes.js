const express = require("express");
const buttonRouter = express.Router();
const buttonControler = require("../controllers/button");

buttonRouter.get("/test", async (req, res) => {
  try {
    const buttontest = await buttonControler.test();
    res.status(200).json(buttontest);
  } catch {
    res.status(500).json({ error: "Can't get any result." });
  }
});

module.exports = buttonRouter;