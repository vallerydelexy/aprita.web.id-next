"use client"
import { useState } from "react"
import axios from "axios"
import { setCookie, getCookie } from "cookies-next"
import { useRouter } from "next/navigation"

export default function login() {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const router = useRouter()
	async function sendCredential(e) {
		e.preventDefault()
		const jwt = await axios.post(`${process.env.NEXT_PUBLIC_API}/auth/login`, {
			email: email,
			password: password,
		})

		if (jwt) {
			setCookie("jwt", jwt.data, { maxAge: 60 * 6 * 24 })
			router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard`)
		}
	}
	return (
		<div className="flex flex-col gap-4 p-4 max-w-screen-md mx-auto">
			<input
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				className="dark:bg-gray-100 bg-gray-800 p-2 rounded-lg"
				placeholder="email"></input>
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				className="dark:bg-gray-100 bg-gray-800 p-2 rounded-lg"
				placeholder="password"></input>
			<button
				onClick={(e) => {
					sendCredential(e)
				}}>
				Login
			</button>
		</div>
	)
}
