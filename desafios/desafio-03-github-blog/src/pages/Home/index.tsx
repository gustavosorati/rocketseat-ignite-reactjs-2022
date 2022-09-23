import { HomeContainer, PostListContainer } from "./styles";

import { SearchBar } from "./components/SearchBar";
import { IPost, Post } from "./components/Post";
import { useCallback, useEffect, useState } from "react";
import { Profile } from "./components/Profile";
import { api } from "../../lib/api";
import { Spinner } from "../../components/Spinner";

interface IRequestIssues {
  items: {
    number: number;
    title: string;
    body: string;
    created_at: string;
  }[]
}

const username = import.meta.env.VITE_GIT_USERNAME;
const repo_name = import.meta.env.VITE_GIT_REPONAME;

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);



  const getPosts = useCallback(async (query: string = "") => {
    try {
      setIsLoading(true);

      const response = await api.get<IRequestIssues>(`/search/issues?q=${query}%20repo:${username}/${repo_name}/`);

      const issues = response.data.items.map(issue => {
        return {
          issue_number: issue.number,
          title: issue.title,
          body: issue.body,
          created_at: issue.created_at
        }
      });

      setPosts(issues);
    } catch(err) {
      setIsLoading(false)
      console.log(err);
    } finally {
      setIsLoading(false)
    }
  }, [posts]);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <HomeContainer className="container">
      <Profile />

      <SearchBar amount={posts.length} getPosts={getPosts} />

      <PostListContainer>
        {isLoading && <Spinner />}
        {!isLoading && posts.map(post => {
            return (
              <Post
                key={post.issue_number}
                issue_number={post.issue_number}
                title={post.title}
                created_at={post.created_at}
                body={post.body}
              />
            )
          })}
      </PostListContainer>
    </HomeContainer>
  )
}
