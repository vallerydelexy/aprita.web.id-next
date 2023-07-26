import { relatedPostController } from "@api/controller/relatedPost.controller"

export default async (req, res) => {  
  if (req.method === "GET") {
    return await relatedPostController(req, res);
  }
};
