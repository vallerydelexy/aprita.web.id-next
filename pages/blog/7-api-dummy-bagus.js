import Head from 'next/head'
import Footer from "@components/Footer";
import Header from "@components/Header";
import PostPattern from "@components/PostPattern"
export default function sevenDummyApi() {
  return (
    <div className="relative pb-16 bg-white overflow-hidden">
        <Header />
        <Head>
        <title>7 API Dummy bagus</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <PostPattern />
      <div className="relative pt-8 px-4 sm:px-6 lg:px-8">
      <img className="mx-auto" src="/images/7-api-dummy-bagus.jpeg" />
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              cheatsheet
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              7 API Dummy bagus
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <div
            id="article-body"
          >
            <p>jadi intinya list ini buat developer yang males / hemat waktu, daripada ngetik placeholder atau buat
              <strong> API</strong> dummy. pake dummy yang sudah ada kan lumayan.
            </p>

            <h3>
              <a name="movie-database-imdb" href="#movie-database-imdb"></a>
              🍿 Movie database (IMDB)
            </h3>

            <p>
              <em>
                <a href="https://developers.themoviedb.org/3/getting-started/introduction">
                  https://developers.themoviedb.org/3/getting-started/introduction
                </a>
              </em>
            </p>

            <p>Ini cocok buat projek yang butuh info film, series dll</p>

            <h3>
              <a
                name="food-recipes-spoonacular"
                href="#food-recipes-spoonacular"
              ></a>
              🥄 Food Recipes (spoonacular)
            </h3>

            <p>
              <em>
                <a href="https://spoonacular.com/food-api/docs">
                  https://spoonacular.com/food-api/docs
                </a>
              </em>
            </p>

            <p>Resep masakan, daripada ngetik manual yakan?</p>

            <h3>
              <a
                name="rick-amp-morty-database"
                href="#rick-amp-morty-database"
              ></a>
              👽 Rick &amp; Morty database
            </h3>

            <p>
              <em>
                <a href="https://rickandmortyapi.com/documentation/">
                  https://rickandmortyapi.com/documentation/
                </a>
              </em>
            </p>

            <p>
              The Rick and Morty API ini asalnya dari film kartun dengan judul
              yang sama, cocok buat placeholder blog sci-fi.. hahaha
            </p>

            <h3>
              <a name="random-advice" href="#random-advice"></a>
              🩲 Random Advice
            </h3>

            <p>
              <em>
                <a href="https://api.adviceslip.com/#top">
                  https://api.adviceslip.com/#top
                </a>
              </em>
            </p>

            <p>isinya kata-kata gitu mutiara gitu deh</p>

            <p>
              coba aja, nih{" "}
              <em>
                <a href="https://api.adviceslip.com/advice">
                  https://api.adviceslip.com/advice
                </a>
              </em>
            </p>

            <h3>
              <a name="fake-user" href="#fake-user"></a>
              🥸 Fake User
            </h3>

            <p>
              <em>
                <a href="https://randomuser.me/?ref=undesign">
                  https://randomuser.me/?ref=undesign
                </a>
              </em>
            </p>

            <p>
              api ini buat isinya data info user palsu, lumayan dari pada ngetik.
            </p>

            <h3>
              <a name="user-icons-dicebear" href="#user-icons-dicebear"></a>
              🤡 User icons (DiceBear)
            </h3>

            <p>
              <em>
                <a href="https://avatars.dicebear.com/docs/http-api#options">
                  https://avatars.dicebear.com/docs/http-api#options
                </a>
              </em>
            </p>

            <p>
              ini isinya gambar-gambar avatar aka foto profil yang tentunya random:{" "}
              <em>
                <a href="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff">
                  https://avatars.dicebear.com/api/male/john.svg?background=%230000ff
                </a>
              </em>
            </p>

            <h3>
              <a name="cats-fact" href="#cats-fact"></a>
              🐱 Cats fact
            </h3>

            <p>
              <em>
                <a href="https://alexwohlbruck.github.io/cat-facts/">
                  https://alexwohlbruck.github.io/cat-facts/
                </a>
              </em>
            </p>

            <p>
              ini fakta, tapi fakta kucing.
              because why not?
            </p>

            <hr />

            <p>Semoga berguna!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
