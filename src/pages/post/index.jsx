import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"
import posts from "../../assets/data/posts"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null)

  useEffect(() => {
    const obj = posts.find(obj => obj.id == id);
    setPost(obj)
  }, [])
  if (post == null) return null
  return (
    <div>
      <Content>
        <PageTitle>{post.title}</PageTitle>
        <img style={{}} src={post.image} />
        {post.content}
      </Content>
    </div>
  )
}

export default Post