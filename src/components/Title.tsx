import styled from "styled-components";
import PorsheImg from "../assets/Porshe1.png";

const Title = () => {
  return <TitleStyled src={PorsheImg} />;
};

export default Title;

const TitleStyled = styled.img`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 25vmax;
`;
