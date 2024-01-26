import Button from "../../components/Button"
import Content from "../../components/Content"
import CourseList from "../../components/CourseList"
import PageTitle from "../../components/PageTitle"
import Postlist from "../../components/PostList"
import Section from "../../components/Section"
import { useNavigate } from "react-router-dom";
import useData from "../../hooks/useData"

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
        <Postlist />
      </Section>
    </Content>
  )
}

export default Home