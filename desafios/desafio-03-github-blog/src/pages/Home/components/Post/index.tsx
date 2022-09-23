import { formatDistance } from "date-fns";
import x from "date-fns";
import { ptBR } from 'date-fns/locale';

import { Content, PostContainer } from "./styles";

export interface IPost {
  issue_number: number;
  title: string;
  created_at: string;
  body: string;
}

export function Post({ issue_number, title, body, created_at}: IPost) {
  return (
    <PostContainer to={`/posts/${issue_number}`}>
      <header>
        <strong>{title}</strong>
        <span>{formatDistance(new Date(created_at), new Date(), {
          addSuffix: true,
          locale: ptBR
        })}</span>
      </header>

      <Content>
        <p>{body}</p>
      </Content>
    </PostContainer>
  )
}
