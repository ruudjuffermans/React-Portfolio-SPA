import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"
import resume from "../../assets/pdf/resume.pdf"

const Resume = () => {
  return (
    <><PageTitle>Resume</PageTitle>

      {/* <embed src={resume} /> */}
      <iframe src={resume} style={{ width: "100%", height: "1200px", border: "none" }}></iframe>
    </>
  )
}

export default Resume