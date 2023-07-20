import Head from 'next/head'
import Footer from "@components/Footer";
import Header from "@components/Header";
import HeroPattern from '@components/HeroPattern';

const posts = [
    {
      id: 1,
      url: 'https://manualsrepo.com/brands/linux/commands',
      title: '1300+ Linux commands manuals',
      tags: ['linux', 'ubuntu', 'webdev', 'programming'],
      date: '1 Nov 2021',
      preview: 'List command linux lumayan lengkap beserta cara pakeknya',
    },
    {
        id: 2,
        url: '/blog/7-api-dummy-bagus',
        title: '7 API dummy bagus buat placeholder',
        tags: ['javascript', 'beginners', 'webdev', 'codenewbie'],
        date: '1 Nov 2021',
        preview: 'API adalah singkatan dari Application Programming Interface, yang merupakan perantara perangkat lunak yang memungkinkan dua aplikasi untuk berbicara satu sama lain!',
      },
      {
        id: 3,
        url: '/blog/programmers-joke',
        title: 'Programmers joke',
        tags: ['javascript', 'beginners', 'webdev', 'codenewbie'],
        date: '2 Nov 2021',
        preview: 'No place like 127.0.0.1',
      },
      {
        id: 4,
        url: '/blog/cara-generate-pkcs8-rsa-public-dan-private-key',
        title: 'Cara generate PKCS8 RSA Public & Private Key',
        tags: ['encryption', 'rsa', 'ssl', 'tls'],
        date: '17 Jul 2022',
        preview: '1. Create key pair openssl genrsa -out keypair.pem 2048 2. Extract public part openssl rsa -in keypair.pem -pubout -out publickey.crt',
      }
  ]
  

export default function Home() {
  return (
    <div className="bg-gray-50 overflow-hidden pb-32 px-4 sm:px-6">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
<Header />

      <main className=" mx-auto max-w-7xl px-4">
      <div className="lg:text-center mb-4">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">cheatsheet web dev, desain, digital marketing dll</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Blog ini isinya agak random
          </p>
        </div>
        </main>
        <div className="relative">
        <div className="divide-y divide-gray-200">
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative bg-white my-4 py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 shadow"
        >
          <div className="flex justify-between space-x-3">
            <div className="max-w-xl flex-1">
              <a href={post.url} className="block focus:outline-none">
                <span className="" aria-hidden="true" />
                <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.tags.map((tag) => (<span className="p-2">#{tag}</span>)
                )}</p>
              </a>
            </div>
          </div>
          <div className="mt-4">
            <p className="line-clamp-2 text-sm text-gray-600">{post.preview}</p>
          </div>
        </div>
      ))}
    </div>
        </div>
        <Footer />
    </div>
  )
}
