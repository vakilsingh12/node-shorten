const Url = require("../models/url");
const { nanoid } = require("nanoid");
require("../connection");
const generateUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(404).json({ error: "Url is required" });
  const shortId = nanoid();
  const result = await Url.create({
    shortId,
    redirectURL: body.url,
    visitHistory: [],
    createdBy:req.user._id
  });
  return res.status(200).json({ msg: "url created", id: shortId });
};
const getUrl = async (req, res) => { 
    try {
        const shortId = req.params.shortId;
        const entry =  await Url.findOneAndUpdate(
          { shortId: shortId, createdBy:req.user._id },
          { $push: { visitHistory: { timestamps: Date.now() } } },
        );
        res.status(200).json(entry)
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
};
module.exports = { generateUrl, getUrl };
