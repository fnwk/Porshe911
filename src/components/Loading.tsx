import styled from "styled-components";

const Loading = () => {
  return <LoadingStyled>Loading...</LoadingStyled>;
};

export default Loading;

const LoadingStyled = styled.h1`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 35px;
  text-align: center;
  font-weight: 300;
`;
