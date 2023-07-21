import "../styles/globals.css";
import "@splidejs/react-splide/css";
import Script from "next/script";
import { useEffect } from "react";
import useThemeStore from '@utils/store/theme.store';

function Application({ Component, pageProps }) {
  const { mode, setLightMode, setDarkMode } = useThemeStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('color-theme');

      if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDarkMode(); // Assuming this function sets the dark mode in your Zustand store
      } else {
        setLightMode(); // Assuming this function sets the light mode in your Zustand store
      }
    }
  }, []);

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [mode]);
  
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
