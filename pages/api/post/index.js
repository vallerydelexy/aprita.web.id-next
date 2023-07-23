import { createPost, getPost } from "@api/controller/post.controller";

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        await createPost(req, res);
      } catch (error) {
        res
          .status(500)
          .json({ success: false, error: "Failed to create the post" });
      }
      break;

    case "GET":
        try {
            await getPost(req, res);
        } catch (error) {
            res
          .status(500)
          .json({ success: false, error: "Failed to fetch the posts" });
        }
      break;

    default:
      res.status(405).json({ success: false, error: "Method not allowed" });
      break;
  }
};
