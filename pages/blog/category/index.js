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
  return <>
    <div className="relative bg-gray-50 overflow-hidden">
      <Head>
        <title>Blog: Rizki Aprita</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header tagline={"Blog categories"}/>

      <main className="mx-auto max-w-7xl px-0 md:px-4">
        <div className="lg:text-center mb-4">
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Categories
          </h1>
        </div>
        <section className="mt-12 mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
              <Link href={"/blog/" + post.slug} passHref key={index} legacyBehavior>
                <img
                  className="h-48 w-full object-cover"
                  src={post.frontMatter.thumbnailUrl}
                  alt=""
                  role="button"
                />
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {post.frontMatter.category}
                  </p>
                  <Link href={"/blog/" + post.slug} passHref key={index} legacyBehavior>
                    <div role="button">
                      <p className="text-xl font-semibold text-gray-900 hover:underline">
                        {post.frontMatter.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.frontMatter.description}
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="mt-6 flex items-center text-sm text-gray-500">
                  <time>{post.frontMatter.date}</time>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  </>;
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      id: frontMatter.id,
      slug: filename.split(".")[0],
      frontMatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default BlogCategories;
