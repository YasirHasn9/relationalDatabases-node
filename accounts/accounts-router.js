const router = require("express").Router();
const db = require("../data/dbConfig");

router.get("/", async (req, res, next) => {
  try {
    const account = await db("accounts").select();
    res.json(account);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
