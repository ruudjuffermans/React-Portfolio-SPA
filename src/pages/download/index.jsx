import { Link } from "react-router-dom"
import PageTitle from "../../components/PageTitle"
import Section from "../../components/Section"

const Download = () => {
  return (
    <div><PageTitle>Downloads</PageTitle>
      <Section>
        <h4>
          Download the course content
        </h4>
        <ul>
          <li>
            <Link style={{ textDecoration: "underline", fontSize: "14px", color: "orange" }} to={"https://github.com/ruudjuffermans/Hyperledger-Fabric-2.x-Blockchain-Network-Smart-Contracts"}>github.com/ruudj/Hyperledger-Fabric</Link>
          </li>
        </ul>

      </Section>
    </div>
  )
}

export default Download