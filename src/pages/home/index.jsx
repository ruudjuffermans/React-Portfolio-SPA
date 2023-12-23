import Content from "../../components/Content"
import CourseList from "../../components/CourseList"
import PageTitle from "../../components/PageTitle"
import Postlist from "../../components/Postlist"
import Section from "../../components/Section"

const Home = () => {
  return (
    <Content>
      <PageTitle >
        <p style={{ fontSize: "16px", maxWidth: " 400px", margin: "auto" }}>
          Thoughts, stories and ideas about monitoring, organisations and people
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