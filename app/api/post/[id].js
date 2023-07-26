import { updatePost, getPostId } from "@api/controller/post.controller";

export default async (req, res) => {
  const { method, query } = req;

  switch (method) {
    case "GET":
      try {
        await getPostId(req, res);
      } catch (error) {
        return res
          .status(500)
          .json({
            success: false,
            error: "An error occurred while fetching the post",
          });
      }
      break;

    case "POST":
      if (!query.id) {
        return res.status(400).json({ success: false, error: "id required" });
      }

      try {
        await updatePost(req, res);
      } catch (error) {
        return res
          .status(500)
          .json({ success: false, error: "Failed to update the post" });
      }
      break;
      
    default:
      return res
        .status(405)
        .json({ success: false, error: "Method not allowed" });
  }
};
