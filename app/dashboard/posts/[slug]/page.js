import TextArea from '@components/TextArea'
import axios from "axios"

async function getPost(slug){
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/post/${slug}`)
    return res
}

export default async function EditPostPage({params}){
    const {slug} = params
    const res = await getPost(slug)
    const postData = res.data.data.data

    return <TextArea postData={postData} />
}

