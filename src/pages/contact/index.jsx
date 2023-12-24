import { Link } from "react-router-dom"
import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"

const Contact = () => {
  return (
    <div><PageTitle>Contact</PageTitle>
      <Content>
        <p>
          If you want to contact me for whatever reason use the contactdetails below.
        </p>
        <h2>Contactdetails:</h2>

        <p>
          <ul>
            <li>
              Email: <span style={{ color: "orange" }}>ruudjuf@gmail.com</span>
            </li>
            <li>
              Telephone: <span style={{ color: "orange" }}>+31 (0)6 435 950 90</span>
            </li>
          </ul>
        </p>
        <p>
          Or check out my socials for more updates and insights.
        </p>
        <h2>Socials:</h2>
        <p>
          <ul>
            <li>
              <Link style={{ color: "orange" }} to={"https://www.instagram.com/rudy_j3/"}>
                Instagram
              </Link>
            </li>
            <li>
              <Link style={{ color: "orange" }} to={"https://www.linkedin.com/in/r-j3/"}>
                Linkedin
              </Link>
            </li>
            <li>
              <Link style={{ color: "orange" }} to={"https://github.com/ruudjuffermans"}>
                Github
              </Link>
            </li>

          </ul>
        </p>
        <p>
          I'm always open to discussions, collaborations, or just a friendly chat about technology and sports. Looking forward to hearing from you!
        </p>

      </Content></div>
  )
}

export default Contact