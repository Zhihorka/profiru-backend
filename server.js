const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: false }));

app.get("/urlsList", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.json(shortUrls);
});

app.post("/shrinkUrl", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
});

app.post("/shrinkCustomUrl", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl, short: req.body.shorUrl });
  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);
  res.redirect(shortUrl.full);
});

app.listen(process.env.PORT || 5000);
