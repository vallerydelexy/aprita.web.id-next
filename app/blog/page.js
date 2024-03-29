import { tanggal } from "@utils/helper"
import Image from "next/image"
import Link from "next/link"

async function getPosts() {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API}/post`, { next: { revalidate: 21600 } })
		if (!res.ok) {
			throw new Error("Error fetching posts")
		}
		return await res.json()
	} catch (error) {
		console.error("Error fetching posts:", error.message)
		throw new Error("Error fetching posts")
	}
}


export default async function Blog() {
	const posts = await getPosts()
	return (
		<>
			<div className="relative bg-gray-100 dark:bg-gray-900 overflow-hidden pb-24">
				<main className="mx-auto max-w-7xl px-0 md:px-4">
					<div className="lg:text-center mb-4">
						<h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
							Catatan yang tak kumpulin, mungkin berguna.
						</h1>
					</div>
					<section className="mt-12 mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3">
						{posts?.map((post, index) => (
							<div
								key={index}
								className="flex flex-col rounded-lg shadow-lg overflow-hidden">
								<div className="flex-shrink-0">
									<Link
										href={"/blog/" + post.slug}
										passHref
										key={index}
										legacyBehavior>
										<Image
											className="h-48 w-full object-cover"
											src={post.thumbnailUrl}
											width={500}
											height={500}
											alt=""
											role="button"
										/>
									</Link>
								</div>
								<div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
									<div className="flex-1">
										<p className="text-sm font-medium text-indigo-600">
											{post.category}
										</p>
										<Link
											href={"/blog/" + post.slug}
											passHref
											key={index}
											legacyBehavior>
											<div role="button">
												<p className="text-xl font-semibold text-gray-900 dark:text-gray-50 hover:underline">
													{post.title}
												</p>
												<p className="mt-3 text-base text-gray-500 dark:text-gray-150">
													{post.description}
												</p>
											</div>
										</Link>
									</div>
									<div className="mt-6 flex items-center text-sm text-gray-500 dark:text-gray-150">
										<time>
											{tanggal(post.date)}
										</time>
									</div>
								</div>
							</div>
						))}
					</section>
				</main>
			</div>
		</>
	)
}
