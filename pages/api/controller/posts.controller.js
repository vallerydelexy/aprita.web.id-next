import getAllPosts from "@api/service/posts.service";

export const testController = async (req, res) => {
  try {
    const response = await getAllPosts();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "An error occurred while fetching posts." });
  }
};
