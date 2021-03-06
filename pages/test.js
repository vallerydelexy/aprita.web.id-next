import Head from "next/head";
import Footer from "@components/Footer";
import Header from "@components/Header";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const BlogCategories = ({ posts }) => {
  posts.sort((a, b) => {
    // id post a di compare dengan id post b, lalu disortir
    if (a.id < b.id) {
      return 1;
    }
    if (a.id > b.id) {
      return -1;
    }
    return 0;
  });
  console.log(posts);
  return (
    <>
      <div className="relative bg-gray-50 overflow-hidden">
        <main className="mx-auto max-w-7xl px-0 md:px-4">
          <div className="lg:text-center mb-4">
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Categories
            </h1>
          </div>
          <section className="mt-12 mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    
    const { data:data } = matter(markdownWithMeta);
    
    return {
      slug: filename.split(".")[0],
      ...data
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default BlogCategories;
