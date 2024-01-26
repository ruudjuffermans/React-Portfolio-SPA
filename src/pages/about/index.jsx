import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"
import image from "../../assets/images/me.png"
import styles from "./style.module.css"

import useData from "../../hooks/useData";

const About = () => {
  const {data, loading, error} = useData("about");

  // console.log(loading)

  if (loading) return null

    return (
    <Content>
      <PageTitle>About me</PageTitle>
      <img alt="portrait ruud juffermans" className={styles.image} src={image} />
      {data.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </Content>
  );
};

export default About