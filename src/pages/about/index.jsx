import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"
import image from "../../assets/images/me.png"

const About = () => {
  return (
    <Content><PageTitle>About me</PageTitle>
      <p>
        <img style={{ maxWidth: "300px", margin: "auto" }} src={image} />
        <p>

          Hi.
        </p>
        <p>

          My name is Ruud Juffermans, and I recently graduated, stepping into the exciting world of technology with a keen interest in cutting-edge domains like Kafka and blockchain. While I'm at the beginning of my professional journey, my passion for these areas drives my eagerness to dive deep and contribute significantly.
        </p>
        <p>

          During my academic years, I focused on understanding the intricacies of distributed systems and decentralized technologies, with a special emphasis on Kafka for real-time data processing and blockchain for its revolutionary impact on secure, transparent transactions. This theoretical grounding has given me a solid foundation, and I'm enthusiastic about applying this knowledge in practical, real-world scenarios.
        </p>
        <p>

          Outside the realm of technology, I'm an avid sports enthusiast. I find balance and rejuvenation in golf, fitness, and running. These activities not only keep me physically active but also sharpen my focus and discipline - qualities that I bring to my professional life.
        </p>
        <p>

          In this blog, I aim to explore and share insights on Kafka and blockchain. From the technical nitty-gritty of Kafka's stream processing capabilities to the transformative potential of blockchain in various industries, I'll delve into a range of topics. Additionally, I'll occasionally share my experiences and learnings from my personal hobbies, drawing parallels between the focus required in sports and the precision needed in technology.
        </p>
        <p>

          As I embark on this journey, I look forward to connecting with like-minded individuals, engaging in knowledge exchange, and growing both as a professional and as an individual. Whether you're a seasoned expert in these fields or a curious newcomer, I hope you find value in my writings and reflections.
        </p>
        <p>

          Stay tuned for updates on Kafka's evolving landscape, blockchain's emerging applications, and occasional musings from the golf course to the running track. Let's explore the synergy between technology and personal growth together!     </p>
      </p>

    </Content>
  )
}

export default About