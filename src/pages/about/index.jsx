import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"
import image from "../../assets/images/me.png"
import styles from "./style.module.css"

const About = () => {
  return (
    <Content><PageTitle>About me</PageTitle>

      <img alt="portrait ruud juffermans" className={styles.image} src={image} />
      <p>
        Hi,
      </p>
      <p>
        I'm Ruud Juffermans, a recent graduate with a deep interest in apache kafka and blockchain technology. My academic journey taught me a lot about distributed systems, giving me a solid foundation on the subject. I'm now excited to apply this knowledge.</p>
      <p>

        Beyond my professional interests, I'm an enthusiastic sports fan, particularly enjoying golf, fitness, and trail running.
      </p>
      <p>

        In this blog, I'll dive into Kafka's stream processing and blockchain's impact on secure transactions, sharing insights and practical applications.
      </p>
      <p>
        Join me on this journey of exploring technology's potential and personal development. Stay tuned for updates!
      </p>

    </Content>
  )
}

export default About