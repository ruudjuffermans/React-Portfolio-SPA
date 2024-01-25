import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"
import image from "../../assets/images/me.png"
import styles from "./style.module.css"

import data from "./data.json";

const About = () => {
  // const { t } = useTranslation(); // Initialize the translation hook

  // const paragraphs = t("paragraphs", { returnObjects: true });

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