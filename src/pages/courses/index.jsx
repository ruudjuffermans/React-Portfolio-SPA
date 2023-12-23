import Content from "../../components/Content"
import CourseList from "../../components/CourseList"
import PageTitle from "../../components/PageTitle"

const Courses = () => {
  return (
    <div><PageTitle>Courses</PageTitle>
      <Content>

        <CourseList />
      </Content>
    </div>
  )
}

export default Courses