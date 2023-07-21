import fs from "fs";
import path from "path";
import matter from "gray-matter";
export const getAllPosts = () => {
    const files = fs.readdirSync(path.join("posts"));
    const posts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
          path.join("posts", filename),
          "utf-8"
        );
        
        const { data: frontMatter } = matter(markdownWithMeta);
    
        return {
          slug: filename.split(".")[0],
          frontMatter,
        };
      });

  return posts
};
