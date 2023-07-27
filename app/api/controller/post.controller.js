import prisma from "@utils/lib/prisma"
import MarkdownIt from "markdown-it"
import { NextResponse } from "next/server"
import { getSlugFromReqeustUrl } from "@utils/helper"
export const createPost = async (request) => {
	const req = await request.json()
	const {
		title,
		description,
		author,
		slug,
		thumbnailUrl,
		thumbnailAlt,
		date,
		draft,
		tags,
		content,
	} = req

	try {
		// Sanitize the content using markdown-it

		const markdownRenderer = new MarkdownIt()
		const sanitizedContent = markdownRenderer.render(content)

		const tagObjects = []
		for (const tagName of tags) {
			// Check if a tag with the provided name already exists
			const existingTag = await prisma.tag.findUnique({
				where: { name: tagName },
			})

			if (existingTag) {
				// If the tag exists, add it to the list of tag objects
				tagObjects.push({ id: existingTag.id })
			} else {
				// If the tag doesn't exist, create a new tag
				const newTag = await prisma.tag.create({
					data: { name: tagName },
				})
				tagObjects.push({ id: newTag.id })
			}
		}

		// Create the new post and associate it with the tags
		const newPost = await prisma.post.create({
			data: {
				title,
				description,
				author,
				slug,
				thumbnailUrl,
				thumbnailAlt,
				date,
				draft,
				content: sanitizedContent, // Save the sanitized content in the database
				tags: {
					connect: tagObjects,
				},
			},
			include: {
				tags: true,
			},
		})

		return { success: true, data: newPost }
	} catch (error) {
		console.error("Error creating post:", error)
		return { success: false, error: "An error occurred while creating post" }
	}
}

export const updatePost = async (req, res) => {
	const id = parseInt(req.query.id)
	try {
		const existingPost = await prisma.post.findUnique({
			where: { id: id },
			include: { tags: true }, // Include the tags related to the post
		})

		if (!existingPost) {
			return res.status(404).json({ error: "Post not found" })
		}

		const {
			title,
			description,
			author,
			slug,
			thumbnailUrl,
			thumbnailAlt,
			date,
			draft,
			tags,
			content,
		} = req.body

		// Sanitize the content using markdown-it
		const markdownRenderer = new MarkdownIt()
		const sanitizedContent = markdownRenderer.render(content)

		const tagObjects = []
		for (const tagName of tags) {
			// Check if a tag with the provided name already exists
			const existingTag = await prisma.tag.findUnique({
				where: { name: tagName },
			})

			if (existingTag) {
				// If the tag exists, add it to the list of tag objects
				tagObjects.push({ id: existingTag.id })
			} else {
				// If the tag doesn't exist, create a new tag
				const newTag = await prisma.tag.create({
					data: { name: tagName },
				})
				tagObjects.push({ id: newTag.id })
			}
		}

		// Update the post with the new data and associated tags
		const updatedPost = await prisma.post.update({
			where: { id: id },
			data: {
				title,
				description,
				author,
				slug,
				thumbnailUrl,
				thumbnailAlt,
				date,
				draft,
				content: sanitizedContent, // Save the sanitized content in the database
				tags: {
					set: tagObjects, // Use 'set' to update the tags associated with the post
				},
			},
			include: {
				tags: true,
			},
		})

		return res.status(200).json(updatedPost)
	} catch (error) {
		console.error("Error updating post:", error)
		return res
			.status(500)
			.json({ error: "An error occurred while updating post" })
	}
}

export const updatePostSlug = async (request) => {
	const slug = /[^/]+$/.exec(request.nextUrl.pathname)[0]
	const body = await request.json()
	const {
		title,
		description,
		author,
		thumbnailUrl,
		thumbnailAlt,
		date,
		draft,
		tags,
		content,
	} = body

	try {
		const existingPost = await prisma.post.findUnique({
			where: { slug }, // Use the slug to find the post
			include: { tags: true }, // Include tags associated with the post
		})

		if (!existingPost) {
			return { error: "Post not found" }
		}

		const sanitizedContent = content

		const tagObjects = []
		for (const tagName of tags) {
			// Check if a tag with the provided name already exists
			const existingTag = await prisma.tag.findUnique({
				where: { name: tagName },
			})

			if (existingTag) {
				// If the tag exists, add it to the list of tag objects
				tagObjects.push({ id: existingTag.id })
			} else {
				// If the tag doesn't exist, create a new tag
				const newTag = await prisma.tag.create({
					data: { name: tagName },
				})
				tagObjects.push({ id: newTag.id })
			}
		}

		// Update the post with the new data and associated tags
		const updatedPost = await prisma.post.update({
			where: { id: existingPost.id },
			data: {
				title,
				description,
				author,
				slug,
				thumbnailUrl,
				thumbnailAlt,
				date,
				draft,
				content: sanitizedContent, // Save the sanitized content in the database
				tags: {
					set: tagObjects, // Use 'set' to update the tags associated with the post
				},
			},
			include: {
				tags: true,
			},
		})

		return updatedPost
	} catch (error) {
		console.error("Error updating post:", error)
		return { error: "An error occurred while updating post" }
	}
}

export const getPostId = async (req, res) => {
	const id = parseInt(req.query.id)

	try {
		// Fetch the post from the database using the ID
		const post = await prisma.post.findUnique({
			where: { id },
			include: { tags: true }, // Include tags associated with the post
		})

		// Check if the post exists
		if (!post) {
			return res.status(404).json({ success: false, error: "Post not found" })
		}

		// Return the post
		return res.status(200).json({ success: true, data: post })
	} catch (error) {
		console.error("Error fetching post by ID:", error)
		return res.status(500).json({
			success: false,
			error: "An error occurred while fetching the post",
		})
	}
}

export const getPost = async (req, res) => {
	const limit = parseInt(req?.url?.searchParams?.get("limit"))
	const start = parseInt(req?.url?.searchParams?.get("start"))

	try {
		const postQueryOptions = {
			select: {
				id: true,
				title: true,
				description: true,
				author: true,
				slug: true,
				thumbnailUrl: true,
				thumbnailAlt: true,
				date: true,
				draft: true,
				tags: true,
			},
			skip: start || undefined,
			take: limit || undefined,
		}

		const posts = await prisma.post.findMany(postQueryOptions)

		return { success: true, data: posts }
	} catch (error) {
		console.error("Error fetching posts:", error)
		return {
			success: false,
			error: "An error occurred while fetching the posts",
		}
	}
}

export const getPostSlug = async ({ slug }) => {
	try {
		// Fetch the post from the database using the slug
		const post = await prisma.post.findUnique({
			where: { slug }, // Use the slug to find the post
			include: { tags: true }, // Include tags associated with the post
		})

		// Check if the post exists
		if (!post) {
			return { success: false, error: "Post not found" }
		}

		// Return the post
		return { success: true, data: post }
	} catch (error) {
		console.error("Error fetching post by slug:", error)
		return {
			success: false,
			error: "An error occurred while fetching the post",
		}
	}
}

export const deletePost = async (request) => {
	const slug = getSlugFromReqeustUrl(request);
  
	try {
	  const deletedPost = await prisma.post.delete({
		where: { slug },
		include: { tags: true },
	  });
  
	  return {
		message: `Post ${deletedPost.slug} #${deletedPost.id} has been deleted`,
	  };
	} catch (error) {
	  // Handle the error
	  console.error("Error deleting post:", error.message);
	  return {
		error: "An error occurred while deleting the post.",
	  };
	}
  };
  
