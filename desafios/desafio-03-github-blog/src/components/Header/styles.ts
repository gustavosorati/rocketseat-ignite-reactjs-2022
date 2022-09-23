import styled from "styled-components";
import left from '../../assets/header/left.png'
import right from '../../assets/header/right.png'


export const HeaderContainer = styled.header`
  width: 100%;
  height: 400px;
  background-image: url(${left}), url(${right});
  background-position: left, right;
  background-repeat: no-repeat;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    margin: 100px;
  }
`
