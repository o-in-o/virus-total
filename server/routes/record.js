const express = require("express");
const router = express.Router();
const cors = require("cors");

const sdk = require("api")("@virustotal/v2.0#17link2ll7g0lnp7");

const Record = require("../models/Record");

router.get("/records/", cors(), async (req, res) => {
  res.json(await Record.find());
});

router.post("/", async (req, res) => {
  const record = new Record(req.body);

  await record.save();
  res.json({ state: "success" });
});

router.get("/:id", async (req, res) => {
  res.json(await Record.findById(req.params.id));
});

router.put("/:id", async (req, res) => {
  await Record.findByIdAndUpdate(req.params.id, req.body);
  res.json({ state: "updated" });
});

router.delete("/:id", async (req, res) => {
  await Record.findByIdAndRemove(req.params.id);
  res.json({ state: "deleted" });
});

router.get("/report", async (req, res) => {
  console.log(res);
  console.log(req);
});

sdk
  .urlReport({
    apikey: "e3c90f975ae445a2c5ae7f02de02424b9f8697317b0d4f49c3bf0ecc51f20d47",
    resource: "2ip.ru",
    allinfo: "false",
    scan: "0",
  })
  .then(({ data }) => console.log(data))
  .catch((err) => console.error(err));

module.exports = router;
