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

router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("accounts").insert(req.body);
    const newPost = await db("accounts")
      .where({ id })
      .first();
    if (newPost) {
      res.status(201).json(newPost);
    } else {
      res.json({ message: "One of the fields is empty" });
    }
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const updatedAccount = await db("accounts")
      .where({ id: req.params.id })
      .first();

    if (updatedAccount) {
      res.json(updatedAccount);
    } else {
      res.json({ message: "Not Found" });
    }
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedPost = await db("accounts")
      .where({ id: req.params.id })
      .update(req.body);

    if (updatedPost) {
      res.status(201).json(updatedPost);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await db("accounts")
      .where({ id: req.params.id })
      .del();
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
module.exports = router;
