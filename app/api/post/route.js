import { NextResponse, NextRequest } from "next/server"
import {
	createPost,
	getPost,
} from "@api/controller/post.controller"

export async function GET(request) {
	try {
		const data = await getPost(request)
		return NextResponse.json({ data: data }, { status: 200 })
	} catch (error) {
		console.log(error)
		return NextResponse.json(
			{ error: "Failed to fetch the posts" },
			{ status: 400 },
		)
	}
}

export async function POST(request) {
	try {
		const data = await createPost(request)
		return NextResponse.json({ data: data }, { status: 201 })
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: "Failed to create the post" },
			{ status: 500 },
		)
	}
}
