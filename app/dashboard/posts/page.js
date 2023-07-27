"use client"
import axios from "axios"
import Link from "next/link"
import {
	TrashIcon,
	PencilAltIcon,
	GlobeAltIcon,
} from "@heroicons/react/outline"
async function getPosts() {
	try {
		const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/post`)
		return res.data.data.data
	} catch (error) {
		console.error("Error fetching posts:", error.message)
		throw new Error("Error fetching posts")
	}
}

export default async function PostsPage() {
	const posts = await getPosts()
	const deletePost = async (slug) => {
		try {
			const res = await axios.delete(
				`${process.env.NEXT_PUBLIC_DOMAIN}/api/post/${slug}`,
			)
			console.log(res.data)
		} catch (error) {
			console.error("Error fetching posts:", error.message)
			throw new Error("Error fetching posts")
		}
	}
	return (
		<main className="min-h-screen">
			<ul role="list" className="divide-y divide-gray-700">
				{posts?.map((post) => (
					<li
						key={post.id}
						className="p-4 group hover:outline hover:outline-2 hover:outline-gray-100/25 rounded-lg hover:bg-gray-700">
						<div className="flex space-x-3 items-center justify-center">
							<img
								className="h-24 w-24 rounded-lg"
								src={post.thumbnailUrl}
								alt={post.thumbnailAlt}
							/>
							<div className="flex-1 space-y-4">
								<div className="flex items-center justify-between min-h-[5em]">
									<div className="">
										<h3 className="font-bold text-2xl text-gray-100">
											{post.title}#{post.id}
										</h3>
										<Link
											href={`${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.slug}`}
											className="flex text-sm text-green-500">
											<GlobeAltIcon className="h-5 w-5 text-green-500" />
											{` ${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.slug}`}
										</Link>
									</div>
									<div className="flex flex-col text-right justify-between">
										<div className="flex flex-row gap-4">
											<Link
												href={`${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.slug}`}
												className="hidden gap-1 p-2 bg-gray-300 rounded-lg group-hover:flex text-sm">
												<GlobeAltIcon className="h-5 w-5" /> View
											</Link>
											<Link
												href={`${process.env.NEXT_PUBLIC_DOMAIN}/dashboard/posts/${post.slug}`}
												className="hidden gap-1 p-2 bg-gray-300 rounded-lg group-hover:flex text-sm">
												<PencilAltIcon className="h-5 w-5" /> Edit
											</Link>
											<button
												onClick={() => {
													deletePost(post.slug)
												}}
												className="hidden gap-1 p-2 bg-red-500 rounded-lg group-hover:flex text-sm">
												<TrashIcon className="h-5 w-5" /> Delete
											</button>
										</div>
									</div>
								</div>
								<p className="text-sm text-gray-200">{post.description}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</main>
	)
}
