import Button from "../../components/Button"
import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"
import Section from "../../components/Section"
import { useNavigate } from "react-router-dom";
import useData from "../../hooks/useData"
import PostList from "../../components/Postlist";
import CourseList from "../../components/CourseList";

const Home = () => {
  const navigate = useNavigate();
  const {data, loading, error} = useData("home");

  function handleClick(path) {
    navigate(path);
  }


  if (loading) return null

  return (
    <Content>
      <PageTitle >
        <p style={{ fontSize: "18px", maxWidth: " 380px", margin: "auto", color: "grey" }}>
          {data.introText}
        </p>
        <br />
        <p style={{ fontSize: "18px", maxWidth: " 380px", margin: "auto", color: "grey" }}>
          Or checkout my personal pages.
        </p>
        <Button onClick={() => handleClick("/contact")} primary>Contact</Button>
        <Button onClick={() => handleClick("/about-me")} to={"/about-me"}>About Me</Button>
      </PageTitle>
      <Section>
        <h3>
          posts
        </h3>
        <PostList />
      </Section>
      <Section>
        <h3>
          courses
        </h3>
        <CourseList />
      </Section>
    </Content>
  )
}

export default Home
