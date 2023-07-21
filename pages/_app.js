import "../styles/globals.css";
import "@splidejs/react-splide/css";
import Script from "next/script";
function Application({ Component, pageProps }) {
  return (
    <div>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}></Script>
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA}');
        `}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}

export default Application;
