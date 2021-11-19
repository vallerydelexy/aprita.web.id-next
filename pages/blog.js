import Head from 'next/head'
import Footer from "@components/Footer";
import Header from "@components/Header";
import HeroPattern from '@components/HeroPattern';
const posts = require("./blog/blog-posts.json");

export default function Blog() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
<Header />
<HeroPattern />
      <main className="mx-auto max-w-7xl px-4">
      <div className="lg:text-center mb-4">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Blog</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          I share anything that may help others, technologies I'm using and cool things I've made.
          </p>
        </div>
        </main>

        <section className="py-8 pb-32">
        {posts.map((post) => (
        <post key={post.id} class="">
                    <div class="mt-6 max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">Jun 1,
                                2020</span>{post.tags.map((tag) => (<tag key={tag}
                                class="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">{tag}</tag>))}
                        </div>
                        <div class="mt-2"><a href={post.url} class="text-2xl font-bold text-gray-700 hover:underline">{post.title}</a>
                            <p class="mt-2 text-gray-600">{post.preview}</p>
                        </div>
                        <div class="flex items-center justify-between mt-4"><a href={post.url}
                                class="text-blue-500 hover:underline">Read more</a>
                        </div>
                    </div>
                </post>))}
        </section>
        <Footer />
    </div>
  )
}
