import { tanggal } from "@utils/helper";
import Image from "next/image";

async function getPost(slug) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API}/post/${slug}`);
		if (!res.ok) {
			throw new Error("Error fetching posts");
		}
		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Error fetching posts:", error.message);
		throw new Error("Error fetching posts");
	}
}


export default async function PostPage({ params }) {
	const { slug } = params
	const post = await getPost(slug)
	const {
		title,
		date,
		thumbnailUrl,
		thumbnailAlt,
		categories,
		tags,
		author,
		content,
	} = post
	return (
		<div className="bg-gray-100 dark:bg-gray-900 overflow-hidden min-h-screen">
			<div className="relative py-16 overflow-hidden">
				<div className="relative px-4 sm:px-6 lg:px-8">
					<div className="text-lg text-gray-900 dark:text-gray-50 mx-auto">
						<h1>
							<span className="max-w-screen-lg mx-auto mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
								{title}
							</span>
						</h1>

						<div className="text-center">
							<span className="text-center text-base text-gray-500 dark:text-gray-150 tracking-wide">
								Written by {author}
							</span>
						</div>
						<div className="text-center">
							<span className="text-center text-base text-gray-500 dark:text-gray-150 tracking-wide">
								{tanggal(date)}
							</span>
						</div>
						
						<Image
							width="350"
							height="350"
							className="mx-auto rounded-lg group-hover:outline group-hover:outline-1 group-hover:outline-indigo-800 max-h-[350] max-w-[350]"
							src={thumbnailUrl}
							alt={thumbnailAlt}
						/>
					</div>
					<div className="mt-6 prose prose-indigo dark:prose-invert prose-code:invert prose-code:text-gray-900 prose-lg prose-code:text-sm prose-code:p-2 prose-pre:font-bold mx-auto break-words">
						<div dangerouslySetInnerHTML={{ __html: content }}></div>
					</div>
				</div>
			</div>
		</div>
	)
}
