import { createTag } from "./controller/tag.controller";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      await createTag(req, res);
    } catch (error) {
      res
        .status(500)
        .json({ success: false, error: "Failed to create the related post" });
    }
  }
};
