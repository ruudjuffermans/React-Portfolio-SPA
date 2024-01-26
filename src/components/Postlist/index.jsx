import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import Button from "../Button";

function formatDate(dateString) {
    const options = { 
        // year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  }

const PostList = () => {
    const [posts, setPosts] = useState(null);
    const [show, setShow] = useState(false);
  
  
    useEffect(() => {
        const jsonFiles = require.context('../../assets/posts', false, /\.json$/);
        const fileNames = jsonFiles.keys();
    
        // Create an array to store all posts
        const allPosts = [];
    
        // Loop through the fileNames to load and parse JSON files
        fileNames.forEach((fileName) => {
          const jsonData = jsonFiles(fileName);
          allPosts.push(jsonData);
        });
    
        // Sort the allPosts array by date in descending order
        allPosts.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        // Set the allPosts array in the state
        setPosts(allPosts);
      }, []);

      if (posts == null) return null
    
    return (
        <>
            <div className={styles.postlist}>
                {posts.slice(0, show ? 99 : 3).map(({ title, date, read, id }, i) => (
                    <Link key={i} className={styles.post}
                    to={`/post/${id}`}>
                        <div className={styles.post__date}>{formatDate(date)}</div>
                        <div className={styles.post__title}>{title}</div>
                        <div className={styles.post__read}> <span className={styles.post__min}> {read} min read</span></div>
                    </Link>
                ))}
            </div>

            {!show && <><div className={styles.listfade}></div>
            <div className={styles.center__row}>
            <Button className={styles.show__more} onClick={() => setShow(99)} >Show More</Button>
            </div>
            </>
            }

        </>
    )
}

export default PostList