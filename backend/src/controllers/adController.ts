import adService from "../services/adService";
import { Request, Response } from "express";

const adController = {
  getOneAdById: async (req: Request, res: Response) => {
    try {
      const result = await adService.getOneAdById(
        Number.parseInt(req.params.adId)
      );
      res.send(result);
    } catch (err) {
      console.log("error", err);
      res.send("an error has occured");
    }
  },
  getAllAds: async (_req: Request, res: Response) => {
    try {
      const ads = await adService.getAllAds();
      res.status(200).send(ads);
    } catch (err) {
      res.status(500).send("an error has occured");
    }
  },
  deleteAdById: async (req: Request, res: Response) => {
    try {
      const idToDelete = Number.parseInt(req.params.idToDelete);
      await adService.deleteAdById(idToDelete);
      res.send("Ad deleted");
    } catch (err) {
      console.log("error", err);
      res.send("error has occured");
    }
  },
};

export default adController;
