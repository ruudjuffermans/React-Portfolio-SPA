import { Link } from "react-router-dom";
import styles from "./style.module.css";
import posts from "../../assets/data/posts";

const Postlist = () => {
    return (
        <div className={styles.postlist}>
            {posts.map(({ title, date, read, id }, i) => (
                <Link key={i} className={styles.post}
                    to={`/post/${id}`}>
                    <div className={styles.post__date}>{date}</div>
                    <div className={styles.post__title}>{title}</div>
                    <div className={styles.post__read}>{read} min read</div>
                </Link>
            ))}
        </div>
    )
}

export default Postlist