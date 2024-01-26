import Content from "../../components/Content"
import PostList from "../../components/PostsList"
import PageTitle from "../../components/PageTitle"

const Blogs = () => {
  return (
    <div><PageTitle>Posts</PageTitle>
      <Content>
        <PostList />
      </Content>
    </div>
  )
}

export default Blogs