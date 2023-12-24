import Button from "../../components/Button"
import Content from "../../components/Content"
import CourseList from "../../components/CourseList"
import PageTitle from "../../components/PageTitle"
import Postlist from "../../components/Postlist"
import Section from "../../components/Section"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleClick(path) {
    navigate(path);
  }

  return (
    <Content>
      <PageTitle >
        <p style={{ fontSize: "18px", maxWidth: " 380px", margin: "auto", color: "grey" }}>
          My Collection of Blog Posts and Courses on Blockchain, Full-Stack Development, and More...
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