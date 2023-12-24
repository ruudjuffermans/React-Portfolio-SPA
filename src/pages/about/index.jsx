import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"
import image from "../../assets/images/me.png"
import styles from "./style.module.css"

const About = () => {
  return (
    <Content><PageTitle>About me</PageTitle>

      <img className={styles.image} src={image} />
      <p>
        Hi,
      </p>
      <p>
        I'm Ruud Juffermans, a recent graduate with a deep interest in Kafka and blockchain technology. My academic journey centered on distributed systems, giving me a solid foundation in these cutting-edge areas. I'm now excited to apply this knowledge in the dynamic tech industry.</p>
      <p>

        Beyond my professional interests, I'm an enthusiastic sports fan, particularly enjoying golf, fitness, and trail running. These activities not only keep me fit but also instill discipline and focus, qualities I find invaluable in my tech career.
      </p>
      <p>

        In this blog, I'll dive into Kafka's stream processing and blockchain's impact on secure transactions, sharing insights and practical applications. Occasionally, I'll also discuss how my sports experiences influence my approach to technology.
      </p>
      <p>

        Join me on this journey of exploring technology's potential and personal development. Stay tuned for updates and insights into Kafka and blockchain. Let's discover the exciting world of technology together!
      </p>

    </Content>
  )
}

export default About