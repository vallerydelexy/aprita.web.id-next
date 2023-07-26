import getRelatedPost from "@api/service/relatedPost.service";

export const relatedPostController = async (req, res) => {
  try {
    const response = await getRelatedPost();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "An error occurred while fetching." });
  }
};
