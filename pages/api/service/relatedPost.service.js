import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import prisma from "@utils/lib/prisma";

export default async function getRelatedPost() {
  try {
    const files = await fs.readdir(path.join("posts"));
    const posts = await Promise.all(files.map(async (filename) => {
      const markdownWithMeta = await fs.readFile(
        path.join("posts", filename),
        "utf-8"
      );

      const { data: frontMatter } = matter(markdownWithMeta);

      return {
        tag: frontMatter.tags, // Extract the first tag
        slug: frontMatter.slug,
      };
    }));

    return posts;
  } catch (error) {
    console.error("An error occurred while fetching posts:", error);
    throw error;
  }
};
