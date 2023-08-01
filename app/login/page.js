"use client"
import { useState } from "react"
import axios from "axios"
import { setCookie, getCookie } from "cookies-next"
import { useRouter } from "next/navigation"

const API_ENDPOINT = `${process.env.NEXT_PUBLIC_API}/auth/login`;
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

export default function Login() {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const router = useRouter()
	const sendCredential = async () => {
		try {
		  const response = await axios.post(API_ENDPOINT, {
			email,
			password,
		  });
	
		  const jwt = response.data;
		  if (jwt) {
			setCookie('jwt', jwt, { maxAge: 60 * 6 * 24 });
			router.push(`${DOMAIN}/dashboard`);
		  } else {
			// Handle error when the response doesn't contain the expected data
			console.error('Invalid response from the server');
		  }
		} catch (error) {
		  // Handle error when the API request fails
		  console.error('Failed to login:', error.message);
		}
	  };

	const handleKeyDown = (e) => {
		e.preventDefault()
		if (e.key === 'Enter') {
		  sendCredential();
		}
	  };
	return (
		<main className="flex flex-col gap-4 p-4 max-w-screen-md mx-auto">
			<input
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				className="dark:bg-gray-100 bg-gray-800 p-2 rounded-lg"
				placeholder="email"
				onKeyDown={handleKeyDown} />
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				className="dark:bg-gray-100 bg-gray-800 p-2 rounded-lg"
				placeholder="password"
				onKeyDown={handleKeyDown} />
			<button className="p-2 text-gray-800 dark:text-gray-200 bg-green-400 rounded-lg font-bold"
				onClick={sendCredential}>
				Login
			</button>
		</main>
	)
}
