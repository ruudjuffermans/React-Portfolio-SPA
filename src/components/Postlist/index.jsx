import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

function formatDate(dateString) {
    const options = { 
        // year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  }

const Postlist = () => {
    const [posts, setPosts] = useState(null);
  
  
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
    
        // Set the allPosts array in the state
        setPosts(allPosts);
      }, []);

      if (posts == null) return null
    
    return (
        <div className={styles.postlist}>
            {posts.map(({ title, date, read, id }, i) => (
                <Link key={i} className={styles.post}
                    to={`/post/${id}`}>
                    <div className={styles.post__date}>{formatDate(date)}</div>
                    <div className={styles.post__title}>{title}</div>
                    <div className={styles.post__read}>{read} min read</div>
                </Link>
            ))}
        </div>
    )
}

export default Postlist