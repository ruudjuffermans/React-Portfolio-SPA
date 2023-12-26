import { Link } from "react-router-dom";
import styles from "./style.module.css";
import hyperledger from "../../assets/images/hyperledger.png"

const postList = [
    {
        title: "Hyperledger Fabric 2.x: Blockchain Network & Smart Contracts",
        img: hyperledger,
        subtitle: "Deep Dive into every Aspect of Hyperledger Fabric Blockchain Networks",
        id: 1,
        link: "https://www.udemy.com/course/hyperledger-fabric-2x/?referralCode=1C0BB70D14E3672FF945"
    },
];

const CourseList = () => {
    return (
        <ul className={styles.courselist}>
            {postList.map(({ title, link, subtitle, read, id }, i) => (
                <li key={i}>
                    <Link className={styles.post}
                        to={link}>
                        <img className={styles.post__img} src={hyperledger} alt="" />
                        <div className={styles.post__text}>
                            <span className={styles.post__title}>{title}</span>
                            <span className={styles.post__subtitle}>{subtitle}</span>
                        </div>
                        <div className={styles.post__read}>go</div>

                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default CourseList