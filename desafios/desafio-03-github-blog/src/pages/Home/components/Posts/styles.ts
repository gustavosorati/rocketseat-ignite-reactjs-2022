import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors["base-post"]};
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      width: 80%;
      color: ${({theme}) => theme.colors["base-title"]};
      font-size: ${({theme}) => theme.fonts["3xl"]};

      margin-bottom: 1rem;
    }

    span {
      width: 20%;
      color: ${({theme}) => theme.colors["base-span"]};
      font-size: ${({theme}) => theme.fonts["medium"]};
      text-align: end;
    }
  }

  p {
      color: ${({theme}) => theme.colors["base-text"]};
      font-size: ${({theme}) => theme.fonts["xl"]};
    }
`
