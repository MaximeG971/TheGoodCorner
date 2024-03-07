import cors from "cors";
import { validate } from "class-validator";
import "reflect-metadata";
import express from "express";
import { dataSource } from "./config/db";
import { Ad } from "./entities/ad";
import { Category } from "./entities/category";
import { Tag } from "./entities/tag";
import adController from "./controllers/adController";

const app = express();
app.use(express.json());
app.use(cors());
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

// app.get("/ads/:adId", async (req, res) => {
//   try {
//     const result = await Ad.findOneByOrFail({
//       id: Number.parseInt(req.params.adId),
//     });
//     res.send(result);
//   } catch (err) {
//     console.log("error", err);
//     res.send("an error has occured");
//   }
// });

app.get("/ads/:adId", adController.getOneAdById);

app.post("/ads", async (req, res) => {
  try {
    console.log("data from front form", req.body);
    const ad = Ad.create(req.body);
    // [1,2] -> [{id: 1}, {id: 2}]
    if (req.body.tags) {
      ad.tags = req.body.tags.map((el: number) => ({ id: el }));
    }
    const errors = await validate(ad);
    if (errors.length > 0) {
      console.log("validation errors", errors);
      throw new Error(`Validation failed!`);
    } else {
      await ad.save();
      res.send("Ad has been created");
    }
  } catch (err) {
    console.log("error", err);
    res.status(500).send("an error has occured");
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
    const categories = await Category.find();
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
