import { Link } from "react-router-dom"
import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"
import useData from "../../hooks/useData";

// import data from "./data.json";

const Contact = () => {
  const {data, loading} = useData("contact");

  if (loading) return null

  return (
    <div>
      <PageTitle>Contact</PageTitle>
      <Content>
        <p>{data.introText}</p>
        <h2>Contact Details:</h2>
        <ul>
          {data.contactDetails.map((contactDetail, index) => (
            <li key={index}>
              {contactDetail.label}: <span style={{ color: "var(--color-primary)" }}>{contactDetail.value}</span>
            </li>
          ))}
        </ul>
        <p>Or check out my socials for more updates and insights.</p>
        <h2>Socials:</h2>
        <ul>
          {data.socials.map((social, index) => (
            <li key={index}>
              <Link style={{ color: "var(--color-primary)" }} to={social.link}>
                {social.label}
              </Link>
            </li>
          ))}
        </ul>
        <p>{data.closingText}</p>
      </Content>
    </div>
  );
};

export default Contact