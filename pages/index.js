import Head from "next/head";
/* This example requires Tailwind CSS v2.0+ */
// import { PaperClipIcon } from "@heroicons/react/solid";
import Skillset from "@components/Skillset";
// import TestSwiper from "@components/swiper";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Avatar from "@components/Avatar";
import Footer from "@components/Footer";
import Header from "@components/Header";
// import Stat from "@components/Stat";
import Terminal from "@components/Terminal";
import GeometricLottie from "@components/GeometricLottie";
import {
  webProjects,
} from "@utils/SliderData";
import PortofolioCard from "@components/PortofolioCard";
// import useModalStore from "@utils/store/modal.store";
import CircleLottie from "@components/CircleLottie";

export default function Home() {
  // const { show, data } = useModalStore((state) => state);
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <Head>
        <title>Rizki Aprita</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />

      <main className="md:mt-16 mx-auto max-w-7xl px-4">
        <div className="">
          <div className="text-center">
            <Avatar />
          </div>

          <h1 className="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-gray-900 dark:text-gray-50 xl:inline">Rizki Aprita</span>
          </h1>
          <h2 className="text-center text-1xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block text-indigo-600 dark:text-indigo-300 xl:inline">
              Visual Designer / Web Developer
            </span>
          </h2>
          {/* <Stat /> */}
          <Terminal
            text={
              "saya Rizki, Saya mendesain hal-hal sederhana yang mudah dipahami dan digunakan"
            }
          />
          <GeometricLottie />
          <div id="skillset" className="pt-6 text-left">
            
          </div>
        </div>
      </main>
      
      <div className="px-4 md:px-6 my-4 py-4 flex flex-col lg:flex-row justify-between" id="portfolio">
        <div className="flex-grow-0 order-last sm:order-none">
        <Skillset />
        </div>
        <div className="flex-grow-1">


        <div className="">
        
          <Splide
            aria-label="Websites & UI/UX"
            options={{
              perPage: 1,
              padding: {right:"4rem"},
              gap: "1em",
              arrows: false,
            }}
            className="max-w-screen-md mx-auto md:rounded-t-lg"
          >
            {webProjects.map((project, index) => {
              return (
                <SplideSlide key={index}>
                  <PortofolioCard logo={project.logo} image={project.image} domain={project.domain} title={project.title} description={project.description} stacks={project.stacks} year={project.year} />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
        </div>
      </div>

      {/* <div id="portfolio">
        <div className="bg-white shadow overflow-hidden rounded-md px-6 my-4 py-4">
          <h1 className="pt-4 pb-2">
            <span className="block text-base text-3xl text-center text-indigo-600 font-semibold tracking-wide">
              Websites & App
            </span>
          </h1>
          <Splide
            aria-label="Websites & UI/UX"
            options={{
              perPage: 3,
              gap: "1em",
            }}
            className="w-full, mx-auto"
          >
            {WebImages.map((image, i) => {
              return (
                <SplideSlide key={i}>
                  <img src={image} className="shadow-lg rounded mx-auto" />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-md px-6 my-4 py-4">
          <h1 className="pt-4 pb-2">
            <span className="block text-base text-3xl text-center text-indigo-600 font-semibold tracking-wide">
              Brand Identity
            </span>
          </h1>
          <Splide
            aria-label="Websites & UI/UX"
            options={{
              perPage: 3,
              gap: "1em",
            }}
            className="w-full, max-w-screen-lg mx-auto"
          >
            {LogoImages.map((image, i) => {
              return (
                <SplideSlide key={i}>
                  <img src={image} className="shadow-lg rounded mx-auto" />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-md px-6 my-4 py-4">
          <h1 className="pt-4 pb-2">
            <span className="block text-base text-3xl text-center text-indigo-600 font-semibold tracking-wide">
              Print & Digital advert
            </span>
          </h1>
          <Splide
            aria-label="Websites & UI/UX"
            options={{
              perPage: 3,
              gap: "1em",
            }}
            className="w-full, max-w-screen-lg mx-auto"
          >
            {PrintImages.map((image, i) => {
              return (
                <SplideSlide key={i}>
                  <img src={image} className="shadow-lg rounded mx-auto" />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div> */}

      {/* <div className="mx-auto max-w-md py-4 sm:py-5">
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
      </div> */}

      <Footer />
    </div>
  );
}
