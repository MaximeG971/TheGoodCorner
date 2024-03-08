import { Ad } from "../entities/ad";

const adService = {
  getOneAdById: async (id: number): Promise<Ad> => {
    try {
      const result = await Ad.find({
        where: { id: id },
        relations: { category: true },
      });
      console.log("result from getOneAdById", result);
      return result[0];
    } catch (err) {
      console.log("err", err);
      return err;
    }
  },
  getAllAds: async (): Promise<Ad[]> => {
    try {
      const ads = await Ad.find({});
      return ads;
    } catch (err) {
      console.log("err", err);
      return err;
    }
  },
  deleteAdById: async (id: number): Promise<void> => {
    try {
      await Ad.delete(id);
    } catch (err) {
      console.log("err", err);
      return err;
    }
  },
};

export default adService;
