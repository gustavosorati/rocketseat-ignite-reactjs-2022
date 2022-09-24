import { useParams } from "react-router-dom";
import { PostsContainer } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { PostHeader } from "./components/PostHeader";
import { api } from "../../lib/api";
import { PostContent } from "./components/PostContent";

export interface Post {
  title: string;
  body: string;
  comments: number;
  created_at: string;
  html_url: string;
  user: {
    login: string;
  }
}

const username = import.meta.env.VITE_GIT_USERNAME;
const repo_name = import.meta.env.VITE_GIT_REPONAME;


export function Posts(){
  const {id} = useParams();
  const [post, setPost] = useState<Post>({} as Post);
  const [isLoading, setIsLoading] = useState(true);

  const getPost = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/repos/${username}/${repo_name}/issues/${id}`);
      setPost(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [post]);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostsContainer className="container">
      <PostHeader postData={post} isLoading={isLoading} />
      <PostContent text={post.body} />
    </PostsContainer>
  )
}
