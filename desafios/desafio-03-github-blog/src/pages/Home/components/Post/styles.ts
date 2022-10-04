import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)`
  width: 100%;
  max-width: 400px;
  width: 100%;
  height: 280px;
  background-color: ${({theme}) => theme.colors["base-post"]};
  border-radius: 10px;

  padding: 2rem;

  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    border-color: ${({theme}) => theme.colors["base-label"]};
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: 15px;

    strong {
      flex: 1;
      color: ${({theme}) => theme.colors["base-title"]};
      font-size: ${({theme}) => theme.fonts["2xl"]};
    }

    span {
      color: ${({theme}) => theme.colors["base-span"]};
      font-size: ${({theme}) => theme.fonts["medium"]};
    }
  }
`

export const Content = styled.div`
  p {
    color: ${({theme}) => theme.colors["base-text"]};
    font-size: ${({theme}) => theme.fonts["xl"]};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
