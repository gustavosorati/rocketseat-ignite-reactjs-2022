import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 400px;
  background-image: url("./src/assets/header/left.png"), url("./src/assets/header/right.png");
  background-position: left, right;
  background-repeat: no-repeat;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    margin: 100px;
  }
`
