import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"
import resume from "../../assets/images/resume.png"
import { Page, Document } from 'react-pdf';



const Resume = () => {
  return (
    <><PageTitle>Resume</PageTitle>

      <img style={{ maxWidth: "600px", margin: "auto" }} src={resume} alt="" />
      {/* <iframe src={resume} style={{ width: "100%", height: "1200px", border: "none" }}></iframe> */}
    </>
  )
}

export default Resume