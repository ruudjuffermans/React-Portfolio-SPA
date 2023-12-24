import { Link } from "react-router-dom"
import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"
import Section from "../../components/Section"

const Download = () => {
  return (
    <div><PageTitle>Downloads</PageTitle>
      <Section>
        <p>
          Download the course content
        </p>
        <ul>
          <li>
            <Link style={{ textDecoration: "underline", fontSize: "12px", color: "orange" }} to={"https://github.com/ruudjuffermans/Hyperledger-Fabric-2.x-Blockchain-Network-Smart-Contracts"}>github.com/ruudjuffermans/Hyperledger-Fabric</Link>
          </li>
        </ul>

      </Section>
    </div>
  )
}

export default Download