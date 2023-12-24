import Content from "../../components/Content"
import CourseList from "../../components/CourseList"
import PageTitle from "../../components/PageTitle"
import Postlist from "../../components/Postlist"
import Section from "../../components/Section"

const Home = () => {
  return (
    <Content>
      <PageTitle >
        <p style={{ fontSize: "18px", maxWidth: " 380px", margin: "auto", opacity: "0.5" }}>
          My Collection of Blog Posts and Courses on Blockchain, Full-Stack Development, and More...
        </p>
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