import styled from "styled-components";
import logoImg from "../assets/LogoF.svg";

const Logo = () => {
  return (
    <CreditsStyled>
      <a className="model-author" href="https://sketchfab.com/karolmiklas">
        Model author <span>Karol Miklas</span>
      </a>

      <a href="https://github.com/fnwk">
        <img src={logoImg} />
      </a>
    </CreditsStyled>
  );
};

export default Logo;

const CreditsStyled = styled.div`
  display: flex;
  position: fixed;
  bottom: 4%;
  right: 4%;
  height: 50px;

  img {
    width: 10vw;

    @media screen and (min-width: 600px) {
      width: 3vw;
    }
  }

  .model-author {
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    font-weight: 300;
    font-size: 14px;
    text-align: right;

    span {
      font-weight: 400;
    }
  }
`;
