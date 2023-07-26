"use client"
// import "../styles/globals.css";
import "@styles/globals.css"
import Script from "next/script"
import { useEffect } from "react"
import useThemeStore from "@utils/store/theme.store"
import Head from "next/head"
import { Metadata } from "next"
import Footer from "@components/Footer"
import Header from "@components/Header"
import { usePathname } from "next/navigation"

export default function Application({ children }) {
	const pathname = usePathname()
	const { mode, setLightMode, setDarkMode } = useThemeStore()

	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedTheme = localStorage.getItem("color-theme")

			if (
				storedTheme === "dark" ||
				(!storedTheme &&
					window.matchMedia("(prefers-color-scheme: dark)").matches)
			) {
				setDarkMode() // Assuming this function sets the dark mode in your Zustand store
			} else {
				setLightMode() // Assuming this function sets the light mode in your Zustand store
			}
		}
	}, [])

	useEffect(() => {
		if (mode === "dark") {
			document.documentElement.classList.add("dark")
			document.documentElement.classList.remove("light")
		} else {
			document.documentElement.classList.remove("dark")
			document.documentElement.classList.add("light")
		}
	}, [mode])

	return (
		<html lang="en">
			{/* <Head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
        ></Script>
        <Script id="google-analytics">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA}');
        `}
        </Script>
      </Head> */}
			<body className="bg-gray-100 dark:bg-gray-900">
				{!pathname.startsWith("/dashboard") && <Header />}

				{children}
				{!pathname.startsWith("/dashboard") && <Footer />}
			</body>
		</html>
	)
}
