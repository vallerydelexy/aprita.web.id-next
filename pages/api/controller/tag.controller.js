import prisma from "@utils/lib/prisma";

export const createTag = async (req, res) => {
  const { tag, slug } = req.body;
  try {
    const existingPosts = await prisma.post.findMany({
      where: {
        slug: slug, // Use an array of slugs
      },
    });

    if (existingPosts.length !== slug.length) {
      // Check if all provided slug correspond to existing posts
      return res
        .status(404)
        .json({ error: "One or more posts with the provided slugs do not exist." });
    }

    const newTag = await prisma.tag.create({
      data: {
        name: tag,
        posts: {
          connect: existingPosts.map((post) => ({
            id: post.id,
          })),
        },
      },
      include: {
        posts: true, // This will include the associated posts in the response
      },
    });

    return res.status(201).json(newTag);
  } catch (error) {
    console.error("Error creating tag:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating tag" });
  }
};
