import Head from "next/head";
import Footer from "@components/Footer";
import Header from "@components/Header";
import PostPattern from "@components/PostPattern";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import axios from "axios";

const components = { SyntaxHighlighter };

const PostPage = ({
  frontMatter: {
    title,
    date,
    thumbnailUrl,
    thumbnailAlt,
    categories,
    tags,
    author,
  },
  mdxSource,
}) => {
  return (
    <div className="bg-white overflow-hidden  ">
      <Header tagline={"Blog"} />
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg mx-auto">
            <h1>
              <span className="max-w-screen-lg mx-auto mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </span>
            </h1>

            <div className="text-center">
              <span className="text-center text-base text-gray-500 tracking-wide">
                Written by {author}
              </span>
            </div>
            <div className="text-center">
              <span className="text-center text-base text-gray-500 tracking-wide">
                {date}
              </span>
            </div>
            <img
              className="max-w-screen-lg rounded-lg mx-auto"
              src={thumbnailUrl}
              alt={thumbnailAlt}
            />
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto break-words">
            <MDXRemote
              id="article-body"
              {...mdxSource}
              components={components}
            />
            <div className="text-center">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-center text-base text-gray-500 tracking-wide"
                >
                  #{tag}&nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const getStaticPaths = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/posts`);
  const posts = res.data;
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join(
      process.env.NEXT_PUBLIC_CONTENT_FOLDER,
      `${slug}${process.env.NEXT_PUBLIC_CONTENT_FILE_EXT}`
    ),
    process.env.NEXT_PUBLIC_CONTENT_ENCODING
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
