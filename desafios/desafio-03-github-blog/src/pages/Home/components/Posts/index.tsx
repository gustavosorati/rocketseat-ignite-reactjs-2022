import { PostContainer } from "./styles";

interface IPost {
  title: string;
  date: string;
  description: string;
}

export function Post({title, description, date}: IPost) {


  return (
    <PostContainer>
      <header>
        <strong>{title}</strong>
        <span>{date}</span>
      </header>

      <p>{description}</p>
    </PostContainer>
  )
}
