import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle"
import CodeBox from "../../components/CodeBox"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    const jsonFiles = require.context('../../assets/posts', false, /\.json$/);

    const findJsonWithIdOne = () => {
      const fileNames = jsonFiles.keys();

      const matchingFiles = fileNames.filter((fileName) => {
        const jsonData = jsonFiles(fileName);
        return jsonData.id == id;
      });

      setPost(jsonFiles(matchingFiles));
    };

    findJsonWithIdOne();
  }, []);

  useEffect(() => {
    if (post != null) {
      import(`../../assets/images/${post.image}.png`)
      .then((image) => {
        setImageSrc(image.default);
      })
      .catch((error) => {
        console.error(error);
      });
    }

  }, [post]);

  if (imageSrc == null) return null

  return (
      <Content>
        <PageTitle>{post.title}</PageTitle>
        {imageSrc && <img alt="My Image" src={imageSrc} />}
        {post.content.map(({ value, id, tag }) => {
          switch (tag) {
            case "CodeBox":
              return <CodeBox key={id}>{value}</CodeBox>;
            case "ol":
              return (
                <ol key={id}>
                  {value.map(({value, id}) => (
                    <li key={id}>{value}</li>
                  ))}
                </ol>
              );
            case "ul":
              return (
                <ul key={id}>
                  {value.map(({value, id}) => (
                    <li key={id}>{value}</li>
                  ))}
                </ul>
              );
            default:
              const Tag = tag;
              return <Tag key={id}>{value}</Tag>;
          }
        })}
      </Content>
  )
}

export default Post