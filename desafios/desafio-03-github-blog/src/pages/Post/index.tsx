import { useParams } from "react-router-dom";
import { PostsContainer } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { PostHeader } from "./components/PostHeader";

interface IRequest {
  body: string;
  comments_url: string;
  created_at: string;
  html_url: string;
  title: string;
  user: {
    login: string;
  }
}
interface Post {
  body: string;
  comments: string;
  created_at: string;
  url: string;
  title: string;
  user: {
    nick: string;
  }
}


export function Posts(){
  const {id} = useParams();
  const [post, setPost] = useState<Post>({} as Post);
  const [isLoadgin, setIsLoading] = useState(false);

  async function getPost() {
    try {
      setIsLoading(true);
      const response = await axios.get<IRequest>(`https://api.github.com/repos/gustavosorati/rocketseat-ignite-reactjs/issues/${id}`);

      const comments = await axios.get(response.data.comments_url);

      setPost({
        body: response.data.body,
        comments: comments.data.length,
        created_at: response.data.created_at,
        url: response.data.html_url,
        title: response.data.title,

        user: {
          nick: response.data.user.login,
        }
      });
    } catch (err) {
      console.log(err)
    }finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostsContainer className="container">
      {post && (
        <>
          <PostHeader
            url_post="fdfsdf"
            title="xxx"
            comments="xxx"
            // nick={post.user.}
            created_at="xxx"
          />

        <p>
          {post.body}
        </p>
        </>
      )}
    </PostsContainer>
  )
}
