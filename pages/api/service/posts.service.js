import fs from "fs/promises"; // Use fs.promises for async file operations
import path from "path";
import matter from "gray-matter";

export default async function getAllPosts() {
  try {
    const files = await fs.readdir(path.join("posts"));
    const posts = await Promise.all(files.map(async (filename) => {
      const markdownWithMeta = await fs.readFile(
        path.join("posts", filename),
        "utf-8"
      );

      const { data: frontMatter } = matter(markdownWithMeta);

      return {
        slug: filename.split(".")[0],
        frontMatter,
      };
    }));

    return posts;
  } catch (error) {
    console.error("An error occurred while fetching posts:", error);
    throw error;
  }
};