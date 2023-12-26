import PageTitle from "../../components/PageTitle"
import resume from "../../assets/images/resume.png"



const Resume = () => {
  return (
    <><PageTitle>Resume</PageTitle>
      <img style={{ maxWidth: "600px", margin: "auto" }} src={resume} alt="" />
    </>
  )
}

export default Resume