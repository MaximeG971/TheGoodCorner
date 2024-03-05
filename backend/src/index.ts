import "reflect-metadata";
import express from "express";
// import sqlite3 from "sqlite3";
import { dataSource } from "./config/db";
import { Ad } from "./entities/ad";
import { Category } from "./entities/category";
import { Tag } from "./entities/tag";

// const db = new sqlite3.Database("../backend/the_good_corner.sqlite");

// db.get("PRAGMA foreign_keys = ON");

const app = express();
app.use(express.json());
const port = 5001;

app.listen(port, async () => {
  await dataSource.initialize();
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (_req, res) => {
  res.send("Welcome on port 5001");
});

// ADS

app.get("/ads", async (_req, res) => {
  try {
    const ads = await Ad.find({ relations: { category: true, tags: true } });
    res.status(200).send(ads);
  } catch (err) {
    res.status(500).send("An error has occured");
  }
});

app.post("/ads", async (req, res) => {
  try {
    const ad = Ad.create(req.body);
    //  [1,2] => [{id: 1}, {id:2} ]
    ad.tags = req.body.tags.map((el: number) => ({ id: el }));
    await ad.save();
    res.send("Ad has been created");
  } catch (err) {
    console.log("error", err);
    res.status(500).send("An error has occured");
  }
});

app.delete("/ads/:idToDelete", async (req, res) => {
  try {
    const id = parseInt(req.params.idToDelete);
    await Ad.delete({ id });
    res.send("The ad has been removed");
  } catch (err) {
    console.log("Error", err);
    res.send("An error has occured");
  }
});

// app.put("/ads/:idToEdit", async (req, res) => {
//   const id = parseInt(req.params.idToEdit);
//   const ad = await Ad.findOneBy({ id });
//   if (ad !== null) {
//     ad.title = req.body.title;
//     ad.description = req.body.description;
//     ad.owner = req.body.owner;
//     ad.price = req.body.price;
//     ad.location = req.body.location;
//     try {
//       ad.save();
//       res.send("Ad has been updated");
//     } catch (err) {
//       console.log("Error", err);
//       res.status(500).send("An error has occured");
//     }
//   }
// });

app.put("/ads/:id", async (req, res) => {
  try {
    let ad = await Ad.findOneByOrFail({ id: parseInt(req.params.id) });
    ad = { ...ad, ...req.body };
    if (req.body.tags) {
      ad.tags = req.body.tags.map((el: number) => ({ id: el }));
    }
    await Ad.save(ad);
  } catch (err) {
    console.log(err);
    res.send("An error has occured");
  }
});

// CATEGORIES

app.get("/categories", async (_req, res) => {
  try {
    const categories = await Category.find({ relations: { ad: true } });
    res.status(200).send(categories);
  } catch (err) {
    console.log("Error", err);
    res.status(500).send("An error has occured");
  }
});

app.post("/categories", async (req, res) => {
  try {
    await Category.save(req.body);
    res.status(201).send("Category has been updated");
  } catch (err) {
    console.log("Error", err);
    res.status(500).send("An error has occured");
  }
});

// TAGS

app.get("/tags", async (_req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).send(tags);
  } catch (err) {
    console.log("Error", err);
    res.status(500).send("An error has occured");
  }
});

app.post("/tags", async (req, res) => {
  try {
    await Tag.save(req.body);
    res.status(201).send("Tag has been updated");
  } catch (err) {
    console.log("Error", err);
    res.status(500).send("An error has occured");
  }
});

app.delete("/tags/:idToDelete", async (req, res) => {
  try {
    const id = parseInt(req.params.idToDelete);
    await Tag.delete({ id });
    res.send("The tag has been removed");
  } catch (err) {
    console.log("Error", err);
    res.send("An error has occured");
  }
});
