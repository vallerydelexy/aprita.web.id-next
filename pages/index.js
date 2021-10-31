import Head from 'next/head'
/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon  } from "@heroicons/react/solid";
import Skillset from '@components/Skillset'
import TestSwiper from '@components/Swiper';
import MobileMenu from '@components/MobileMenu'
import Avatar from '@components/Avatar'
import HeroPattern from '@components/HeroPattern';


export default function Home() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
        <Head>
        <title>Rizki Aprita</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <HeroPattern />
      <div className="relative pt-6">
      <MobileMenu />
        <main className="md:mt-16 mx-auto max-w-7xl px-4">
        
          <div className="">
            <div className="text-center">
            <Avatar />
              </div>
            
            <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-gray-900 xl:inline">Rizki Aprita</span>{' '}
            </h1>
            <h2 className="text-center text-1xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-indigo-600 xl:inline">Visual Designer / Web Developer</span>
              </h2>
            <p className="text-center mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Hai saya Rizki, Saya mendesain hal-hal sederhana yang mudah dipahami dan digunakan
            </p>
            <div className="pt-6 text-left">
            <Skillset />
            </div>
          </div>
        </main>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-md px-6 my-4 py-4">
      <h1 className="pt-4 pb-2">
            <span className="block text-base text-3xl text-center text-indigo-600 font-semibold tracking-wide">
              Websites & UI/UX
            </span>
          </h1>
      <TestSwiper srcset={["images/versus.png","images/dsc-web.jpg", "images/polorio-web.jpg", "images/cl.jpg","images/get-indonesia-app.jpg", "images/get-app.jpg"]} />
      </div>
      
      <div className="bg-white shadow overflow-hidden rounded-md px-6 my-4 py-4">
      <h1 className="pt-4 pb-2">
            <span className="block text-base text-3xl text-center text-indigo-600 font-semibold tracking-wide">
              Brand Identity
            </span>
          </h1>
      <TestSwiper srcset={["images/get-indonesia.jpg", "images/get-jaket.jpeg", "images/alwan-zahira.png","images/polorio.png", "images/iotanesia-ragnarok.png"]} />
      </div>

      <div className="bg-white shadow overflow-hidden rounded-md px-6 my-4 py-4">
      <h1 className="pt-4 pb-2">
            <span className="block text-base text-3xl text-center text-indigo-600 font-semibold tracking-wide">
              Print & Digital advert
            </span>
          </h1>
      <TestSwiper srcset={["images/dsc-ig-1.jpg","images/dsc-brosur-asus.jpg", "images/brosur-alwan-zahira.jpg", "images/brosur-les.jpg", "images/dsc-brosur-hp.jpg"]} />
      </div>

      <div className="bg-white shadow overflow-hidden rounded-md px-6 my-4 py-4">
      <h1 className="pt-4 pb-2">
            <span className="block text-base text-3xl text-center text-indigo-600 font-semibold tracking-wide">
              Mockups & Illustration
            </span>
          </h1>
      <TestSwiper srcset={["images/kacang-bakar.jpg"]} />
      </div>
      
      <div className="mx-auto max-w-md py-4 sm:py-5">
          <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
              <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div className="w-0 flex-1 flex items-center">
                  <PaperClipIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2 flex-1 w-0 truncate">
                    rizki-aprita.pdf
                  </span>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Download
                  </a>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      <div className="bg-indigo-600 h-48 ">
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <img className="hidden md:flex h-24 absolute " src="./images/icon-directory.png" />
              <div className="md:rounded-md shadow pt-16 pb-16">
                <a
                  href="https://wa.me/6281276763536"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-indigo-600 bg-indigo-500 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  kalo ada yang bisa tak bantui, klik disini buat hubungin
                  
                </a>
              </div>
              
            </div>
            <p>jangan lupa siapin duit yang banyak</p>
      </div>
      
    </div>
  )
}
