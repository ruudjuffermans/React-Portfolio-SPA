import kafka from "../images/kafka.png"
import nft from "../images/nft.png"
import priv from "../images/private.png"
import books from "../images/books.png"
import icecube from "../images/icecube.png"
import CodeBox from "../../components/CodeBox";



const posts = [
    {
        date: "dec 23",
        title: "Unlocking Streaming Data with Apache Kafka.",
        image: kafka,
        content:
            <>
                <p>
                    In today's fast-paced digital world, where data is generated at unprecedented rates, managing and processing this data in real-time is crucial for many businesses. This is where Apache Kafka, an open-source stream-processing software platform, comes into play. Developed by the Apache Software Foundation, Kafka is designed to provide a unified, high-throughput, low-latency platform for handling real-time data feeds. In this blog post, we'll dive into the world of Kafka, exploring its features, uses, and why it's become an essential tool in modern data architectures.
                </p>
                <h3>

                    What is Apache Kafka?
                </h3>
                <p>

                    Apache Kafka is a distributed event streaming platform capable of handling trillions of events a day. Initially conceived as a messaging queue, Kafka is based on a publish-subscribe model. However, it's unique in its ability to handle high throughput, fault tolerance, and scalability, making it much more than just a messaging system.
                </p>
                <h3>

                    Key Features of Kafka
                </h3>

                <ol>
                    <li>

                        <b>High Throughput:</b> Kafka can handle hundreds of thousands of messages per second, making it suitable for large-scale message processing applications.
                    </li>

                    <li>

                        <b>Scalability:</b> It can be scaled out without downtime, which means you can add more nodes to the Kafka cluster to increase capacity.
                    </li>
                    <li>
                        <b>Durability and Reliability:</b> Kafka replicates data and can withstand node failures, ensuring no data loss.
                    </li>

                    <li>

                        <b>Low Latency:</b> It provides real-time handling of data with very low latency, which is vital for time-sensitive applications.
                    </li>
                    <li>


                        <b>Fault Tolerance:</b> Kafka is designed to be fault-tolerant; it can handle failures at the node and network level.
                    </li>

                    <li>

                        <b>Versatility:</b> It can be used for a variety of applications, including real-time analytics, log aggregation, and event sourcing.
                    </li>
                </ol>

                <h3>

                    Common Use Cases for Apache Kafka
                </h3>

                <ul>
                    <li>

                        Event-Driven Architecture: Kafka is ideal for building event-driven architectures where actions are triggered by events.
                    </li>
                    <li>
                        Real-Time Analytics: Kafka is widely used in analytics platforms for processing and delivering real-time data.
                    </li>
                    <li>
                        Log Aggregation: It can aggregate logs from different sources and make them available for processing in a centralized way.
                    </li>
                    <li>

                        Stream Processing: Kafka streams API allows for real-time data processing within the Kafka ecosystem.
                    </li>
                    <li>

                        Integration with Big Data Technologies: Kafka works seamlessly with big data technologies like Hadoop and Spark.
                    </li>
                </ul>

                <h3>

                    Getting Started with Kafka
                </h3>
                <p>
                    To get started with Kafka:
                </p>

                <ol>
                    <li>

                        <b>Download and Install Kafka:</b> You can download it from the Apache Kafka website.
                    </li>
                    <li>

                        <b>Start the Kafka Environment:</b> Run the Zookeeper service and then start the Kafka server.
                    </li>
                    <li>

                        <b>Create a Topic:</b> Topics in Kafka are categories or feed names to which records are published.
                    </li>
                    <li>

                        <b>Produce and Consume Messages:</b> Write producers to send messages and consumers to read them.
                    </li>
                </ol>

                <h3>

                    Conclusion
                </h3>
                <p>

                    Apache Kafka has emerged as a powerful tool in the world of real-time data streaming and processing. Its robust architecture and versatile nature make it suitable for a wide range of applications, from messaging to analytics. For businesses looking to harness the power of real-time data, Kafka offers an efficient, reliable, and scalable solution. As data continues to grow both in volume and importance, Kafka's role in modern data architectures is set to become ever more pivotal.
                </p>
            </>,
        read: 6,
        id: 1
    },
    {
        date: "dec 24",
        title: "The Illusion of Value: NFTs are a Scam.",
        image: nft,
        content:
            <>
                <p>
                    The world of Non-Fungible Tokens (NFTs) has been hailed as a revolutionary step in digital ownership and art. However, there's a growing debate about the legitimacy of their value. Critics argue that NFTs could be a sophisticated scam, exploiting the very technology that powers them. A crucial point in this argument is the ease with which one can create multiple addresses and transfer NFTs at minimal cost, artificially inflating their value and perceived demand. This blog post explores this controversial perspective and its implications for investors and the digital art market.
                </p>
                <h3>

                    The Mirage of Value Creation
                </h3>
                <p>
                    The process of buying and selling NFTs, at its core, is straightforward: digital assets are tokenized as unique items on a blockchain. However, the simplicity of creating countless addresses and transferring NFTs between them at nominal costs raises questions. By transferring an NFT to oneself across various addresses, often at inflated prices, a user can create a false sense of value and demand. This artificial inflation can mislead potential buyers into believing that the NFT is highly sought after and worth more than its intrinsic value.
                </p>
                <h4>
                    Key Concerns:
                </h4>

                <ol>
                    <li>
                        Artificial inflation of prices and demand


                    </li>

                    <li>
                        Misrepresentation of market interest          </li>
                    <li>
                        Potential for misleading investors   </li>

                </ol>

                <h3>

                    The Cost of Transactions: A Closer Look
                </h3>
                <p>
                    One might argue that transaction costs in blockchain networks should deter such practices. However, in many cases, these costs are relatively low, especially compared to the perceived gains from inflating an NFT's value. This low barrier to manipulation makes it feasible for individuals to engage in deceptive practices that can distort the market.
                </p>
                <h4>

                    Key Observations:
                </h4>

                <ol>
                    <li>
                        Low transaction costs facilitate manipulation

                    </li>
                    <li>
                        Disproportion between the cost of transactions and the perceived value of NFTs      </li>

                </ol>

                <h3>

                    Network Activity: Quantity vs. Quality
                </h3>
                <p>
                    Another aspect of this issue is the interpretation of network activity. High transaction volume and frequent address changes might suggest a thriving market, but this can be misleading. If the activity is not organic but orchestrated by a few, it undermines the credibility of the network and the true value of its assets.
                </p>
                <h4>

                    Key Insights:
                </h4>

                <ol>
                    <li>
                        Network activity can be artificially generated

                    </li>
                    <li>
                        Difficulty in distinguishing genuine market interest from manipulation      </li>

                </ol>

                <h3>
                    Conclusion:
                </h3>
                <p>
                    The debate around NFTs and their value is complex and multifaceted. While NFTs represent a significant advancement in digital ownership and the democratization of art, the potential for manipulation and artificial inflation of value cannot be ignored. Investors and enthusiasts must approach this market with a critical eye, understanding that not all that glitters is gold. As the NFT landscape evolves, it's crucial to develop mechanisms to safeguard against such manipulations, ensuring a fair and transparent market for digital assets.
                </p>
            </>,
        read: 5,
        id: 2
    },
    {
        date: "dec 24",
        title: 'When is a Private Blockchain actually your Best Choice.',
        image: priv,
        content:
            <>
                <p>
                    Blockchain technology, widely recognized for its role in powering cryptocurrencies, is often associated with public networks where transparency and decentralization are key.However, in certain scenarios, the lesser - discussed cousin, private blockchain, emerges as the ideal architecture.This blog post explores those rare but significant cases where private blockchain networks offer the best solution, balancing the inherent benefits of blockchain with the needs of specific applications.
                </p>
                <h3>

                    The Essence of Private Blockchain
                </h3>
                <p>
                    A private blockchain is a permissioned network where access is restricted to selected participants.This structure offers control over who can participate in the network, submit transactions, and access data.While this may seem contrary to the traditional blockchain ethos of decentralization, it provides critical advantages in certain use cases.
                </p>
                <h4>
                    Key Characteristics:
                </h4>

                <ul>
                    <li>
                        Controlled participation and access
                    </li>
                    <li>
                        Enhanced privacy and security
                    </li>
                    <li>

                        Customizable according to organizational needs
                    </li>
                </ul>

                <h3>
                    Ideal Use Cases for Private Blockchain
                </h3>

                <ol>
                    <li>
                        Supply Chain Management: In supply chains, privacy and control are paramount.A private blockchain can provide transparency in transactions while restricting access to sensitive data to authorized parties only.This ensures integrity and traceability without compromising commercial confidentiality.
                    </li>
                    <li>

                        Financial Services: For banking and financial institutions, transaction privacy and regulatory compliance are crucial.Private blockchains allow these institutions to leverage the efficiency and security of blockchain while maintaining control over transaction visibility and adhering to financial regulations.
                    </li>
                    <li>

                        Healthcare Data Management: Patient data requires utmost confidentiality.Private blockchains can be employed to store and manage health records, ensuring data integrity and access control, which is critical for complying with laws like HIPAA in the United States.
                    </li>
                    <li>

                        Internal Voting Mechanisms: Corporations or organizations requiring secure and transparent voting systems can use private blockchains to conduct votes, with the certainty that only authorized participants are involved and that records are tamper - proof.
                    </li>

                </ol>

                <h3>

                    Advantages Over Public Blockchains
                </h3>
                <p>
                    Another aspect of this issue is the interpretation of network activity. High transaction volume and frequent address changes might suggest a thriving market, but this can be misleading. If the activity is not organic but orchestrated by a few, it undermines the credibility of the network and the true value of its assets.
                </p>
                <h4>

                    Key Insights:
                </h4>

                <ul>
                    <li>

                        Enhanced Privacy: By restricting access, private blockchains ensure sensitive data remains confidential.
                    </li>
                    <li>

                        Higher Efficiency: With fewer nodes to manage, private blockchains can process transactions more quickly.
                    </li>
                    <li>

                        Customization: Organizations can tailor the blockchain to their specific needs, something not possible with public blockchains.
                    </li>
                </ul>

                <h3>
                    The Balance with Centralization
                </h3>
                <p>
                    Critics often argue that private blockchains are just centralized databases with a blockchain veneer.While it's true that they lean towards centralization, they still offer immutability and consensus mechanisms of blockchain technology. The key is finding the right balance for the specific application.
                </p>
                <h3>
                    Conclusion:
                </h3>
                <p>
                    While public blockchains often steal the limelight in discussions about this transformative technology, private blockchains have their place in the digital ecosystem.In situations where privacy, efficiency, and control are crucial, a private blockchain can provide a tailored solution that a public blockchain cannot.As we continue to explore and expand the applications of blockchain technology, recognizing and leveraging the strengths of private blockchains will be essential in industries like healthcare, finance, and supply chain management.
                </p>
            </>,
        read: 8,
        id: 3
    },
    {
        date: "dec 27",
        title: 'My Favorite Reads of 2023',
        image: books,
        content:
            <>
                <p>
                    As the year 2023 draws to a close, it's the perfect time to look back and cherish the wonderful books that graced my reading list. This year has been a remarkable journey through a diverse array of genres and authors, each offering unique insights and unforgettable stories. Join me as I share my top picks from this year's literary adventures.</p>
                <h3>

                    1. "The 48 Laws of Power" by Robert Greene
                </h3>
                <p>
                    This book isn't just a read; it's an expedition into the often unspoken rules of power dynamics. Greene's exploration of power through historical anecdotes and philosophical insights is as enlightening as it is controversial. Each law, from 'Never Outshine the Master' to 'Assume Formlessness,' is presented with a blend of historical examples and practical advice. While some may view these laws as manipulative, I found them to be a revealing lens into the mechanics of power in social and professional landscapes. It's a must-read for anyone looking to understand the underlying forces that shape our interactions. </p>

                <h3>
                    2. "Mastery" by Robert Greene
                </h3>

                <p>
                    Continuing with Greene's compelling style, "Mastery" is a deep dive into the journey of mastering a skill or craft. The book is an amalgamation of biographical sketches of historical figures like Leonardo da Vinci and contemporary masters. Greene dissects the path to mastery, emphasizing the importance of apprenticeship, creative social networks, and the intrinsic motivation behind pursuing mastery. This book resonated with me, reminding me that true mastery is a lifelong journey of continuous learning and passion.
                </p>

                <h3>

                    3. "The Molecule of More" by Daniel Z. Lieberman and Michael E. Long
                </h3>
                <p>
                    "The Molecule of More" is a fascinating exploration of how a single neurotransmitter, dopamine, influences our desires, motivations, and pleasures. Lieberman and Long combine neuroscience with everyday experiences, making complex concepts accessible and engaging. This book offers a unique perspective on why we crave what we crave, and how our pursuit of 'more' impacts various aspects of our lives, from relationships to career choices. It's a thought-provoking read that left me reflecting on my own dopamine-driven pursuits. </p>


                <h3>
                    4. "Atomic Habits" by James Clear
                </h3>
                <p>
                    James Clear's "Atomic Habits" is a game-changer in the world of self-improvement. Clear's approach to habit formation is both practical and profound, emphasizing small, incremental changes that lead to significant results over time. His 4-step model of cue, craving, response, and reward offers a simple yet powerful framework for understanding and reshaping our habits. This book is a toolbox of strategies for anyone looking to build better habits or break bad ones. It's a guide I'll be returning to often. </p>
                <h3>
                    Conclusion:
                </h3>
                <p>
                    Each of these books has contributed uniquely to my understanding of power, mastery, desire, and habit formation. Whether you're looking for strategic insights, personal growth, or a deeper understanding of human nature, these titles offer a rich tapestry of knowledge and wisdom. As 2024 comes to a close, I'm grateful for the lessons these books have imparted and excited for what next year's reading list will bring. </p>
            </>,
        read: 7,
        id: 4
    },
    {
        date: "jan 19",
        title: 'SOLID Principles applied to python Object Oriented Programming',
        image: icecube,
        content:
            <>
                <p>
                    In Python, when you're creating classes,
                    principles can be used too enhance the quality of your object-oriented code.
                    The most universally acepted principles for object-oriented programming are the SOLID principles.
                    SOLID is an acronym that groups five core principles that apply to object-oriented design. These principles are the following:
                </p>
                <ol>
                    <li>Single-responsibility principle</li>
                    <li>Open–closed principle</li>
                    <li>Liskov substitution principle</li>
                    <li>Interface segregation principle</li>
                    <li>Dependency inversion principle</li>
                </ol>
                <br />
                <h2>
                    Single-responsibility principle
                </h2>
                <p>
                    The Single Responsibility Principle describes that a class should have only one reason to change.
                </p>
                <p>This means that a class and its methods should have only one responsibility. Different tasks should be seperated in their own classes.
                    The benefits of this implementation are that classes with a single responsibility are easier to understand and modify this would reduce the risk of introducing bugs when you make changes.
                    Also, when a class has a single responsibility, it becomes easier to write focused unit tests, ensuring that each part of your system functions correctly.
                </p>
                <p>In this next example we find the class called : <b>ReportGenerator</b>. This class contains 2 methods called <b>generate_report</b> and <b>send_email</b>.</p>
                <CodeBox >
                    {`class ReportGenerator:
    def __init__(self, report_data):
        self.report_data = report_data

    def generate_report(self):
        # Generate a report from the data
        report = f"Report Data: {self.report_data}"
        return report

    def send_email(self, recipient_email):
        # Send an email with the generated report as an attachment
        report = self.generate_report()
        # Code for sending email with the report`}
                </CodeBox>
                <p>This principle suggests that this is a wrong implementation. A better way would be to seperate the email sending in its own class.</p>
                <CodeBox>
                    {`class ReportGenerator:
    def __init__(self, report_data):
        self.report_data = report_data

    def generate_report(self):
        # Generate a report from the data
        report = f"Report Data: {self.report_data}"
        return report

class EmailSender:
    def __init__(self):
        pass

    def send_email(self, recipient_email, message):
        # Send an email with the provided message
        # Code for sending email`}
                </CodeBox>
                <br />
                <h2>
                    Open–closed principle
                </h2>
                <p>
                    The Open/Closed Principle suggests that software entities (classes, modules, functions, etc.) should be created in a way that is open for extension but closed for modification.
                </p>
                <p>
                    To better understand what the open-closed principle is all about, consider the following Shape class:
                </p>
                <CodeBox >
                    {`class ShapeCalculator:
    def calculate_area(self, shape, **kwargs):
        if shape == "rectangle":
            width = kwargs.get("width", 0)
            height = kwargs.get("height", 0)
            return width * height
        elif shape == "circle":
            radius = kwargs.get("radius", 0)
            return 3.14159265359 * radius * radius
`}
                </CodeBox>
                <p>
                    in the <b>calculate_area</b> function we decide how to calculate the area based on the shape that is provided as a parameter. The Open–closed principle says that it's better to, instead of deciding what logic is used incide the class, add additions to the code in obects that derive the shared logic from a parent object, like how its done in the next example.
                </p>
                <CodeBox>
                    {`from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def calculate_area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calculate_area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        return 3.14 * self.radius * self.radius
`}
                </CodeBox>
                <p>Now the <b>Shape</b>, <b>Rectangle</b> and <b>Circle</b> classes are created and done, no modification needed. We can however extend the code base by adding additional shape classes, like for example a triangle class.</p>
                <br />
                <h2>
                    Liskov substitution principle
                </h2>
                <p>
                    The Liskov Substitution Principle states that derived classes should be able to replace their parent class without affecting the correctness of the program.
                </p>
                <h4>Wrong implementation</h4>
                <CodeBox >
                    {`class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def set_width(self, width):
        self.width = width

    def set_height(self, height):
        self.height = height

    def area(self):
        return self.width * self.height

class Square(Rectangle):
    def __init__(self, side_length):
        super().__init__(side_length, side_length)

    def set_width(self, width):
        self.width = width
        self.height = width

    def set_height(self, height):
        self.width = height
        self.height = height`}
                </CodeBox>
                <p>This example is wrong because we overwrite some of the logic of the parent class.</p>
                <h4>Right implementation</h4>
                <CodeBox>
                    {`class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def set_width(self, width):
        self.width = width

    def set_height(self, height):
        self.height = height

    def area(self):
        return self.width * self.height

class Square:
    def __init__(self, side_length):
        self.side_length = side_length

    def set_side_length(self, side_length):
        self.side_length = side_length

    def area(self):
        return self.side_length ** 2`}
                </CodeBox>
                <p>This way is better because no inherited logic is overwritten. Now we could argue that we can still add a parent class to inherit from, we could call it Shape and set it up as a base class with a abstract method called <b>area</b>.</p>
                <br />
                <h2>
                    Interface segregation principle
                </h2>
                <p>
                    The Interface Segregation Principle suggests that clients should not be forced to depend on interfaces they do not use.
                    In other words, it encourages the creation of small, specific interfaces rather than large, monolithic ones.
                </p>
                <CodeBox >
                    {`from abc import ABC, abstractmethod
                    
class Worker(ABC):
    @abstractmethod
    def code(self):
        pass

    @abstractmethod
    def test(self):
        pass

class Developer(Worker):
    def code(self):
        # Developer-specific code implementation
        pass

    def test(self):
        # Developer-specific test implementation
        pass

class Tester(Worker):
    def code(self):
        raise NotImplementedError("Functionality not supported")

    def test(self):
        # Tester-specific test implementation
        pass`}
                </CodeBox>
                <p>Here we have a class called <b>Developer</b> and a class called <b>Tester</b> that both inherit from the <b>Worker</b> class. Since they both inherit from the <b>Worker</b> class, they both need to implement the methods.
                    The <b>Tester</b> class does not implement the <b>code</b> function so it raises a exception when it's called from this class.</p>
                <p>In this next example we create 2 smaller interfaces that, when they are used, are fully implemented.</p>
                <CodeBox>
                    {`from abc import ABC, abstractmethod

class Coder(ABC):
    @abstractmethod
    def code(self):
        pass

class Tester(ABC):
    @abstractmethod
    def test(self):
        pass

class Developer(Coder, Tester):
    def code(self):
        # Developer-specific code implementation
        pass

    def test(self):
        # Developer-specific test implementation
        pass

class ManualTester(Tester):
    def test(self):
        # ManualTester-specific test implementation
        pass`}
                </CodeBox>
                <br />
                <h2>
                    Dependency inversion principle
                </h2>
                <p>
                    The Dependency Inversion Principle states that high-level modules should not depend on low-level modules, but both should depend on abstractions.
                    It encourages the use of interfaces or abstract classes to decouple classes and make the code more flexible and testable.
                </p>
                <CodeBox >
                    {`class FrontEnd:
    def __init__(self, back_end):
        self.back_end = back_end

    def display_data(self):
        data = self.back_end.get_data_from_database()
        print("Display data:", data)

class BackEnd:
    def get_data_from_database(self):
        return "Data from the database"`}
                </CodeBox>
                <p>In this example, the <b>FrondEnd</b> class depends on the <b>BackEnd</b> class and its specificly named function <b>get_data_from_database</b>. This tightly coupled implementation leads to scalability issues. Lets say we want to be able to read data from a REST API too, then we also need to make changes to the <b>FrontEnd</b> class.
                    To fix the issue, you can apply the dependency inversion principle and make your classes depend on abstractions rather than on very specific implementations like <b>BackEnd</b>.</p>
                <p>
                    To fix this example we can introduce a <b>DataSource</b> class that provides the interface to use in your derived classes. Like how its done in the next example.</p>

                <CodeBox>
                    {`from abc import ABC, abstractmethod

class FrontEnd:
    def __init__(self, data_source):
        self.data_source = data_source

    def display_data(self):
        data = self.data_source.get_data()
        print("Display data:", data)

class DataSource(ABC):
    @abstractmethod
    def get_data(self):
        pass

class Database(DataSource):
    def get_data(self):
        return "Data from the database"

class API(DataSource):
    def get_data(self):
        return "Data from the API"`}
                </CodeBox>
                <br />
                <h2>Conclusion</h2>
                <p>By applying the SOLID principles in your Python code, you can achieve better object-oriented design, leading to more maintainable, flexible, and extensible software. These principles promote clean and modular code, making it easier to collaborate with other developers and adapt to changing requirements.</p>
            </>,
        read: 6,
        id: 5
    },
];

export default posts