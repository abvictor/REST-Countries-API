import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 915px) {
    width: 100%;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 6.5rem;
  height: 3rem;

  font-size: 1.5rem;
  border: 1px solid black;
  border-radius: 0.75rem;
  margin-top: 3rem;
  margin-right: 70%;
  a {
    text-decoration: none;
    color: #000;
  }
`;
export const CountryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 60rem;
  height: 30rem;
  color: #000;
  animation: 1s ${fadeInLeftAnimation};
  margin-top: 2rem;
  @media (max-width: 915px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 7rem;
  }
`;
export const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 30rem;
  margin-top: 5rem;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  h2 {
    margin-top: 3rem;

    font-size: 2rem;
  }
  img {
    width: 40rem;
  }
  p {
    font-size: 1.2rem;
  }
  @media (max-width: 915px) {
    margin-top: 0;
    h2 {
      margin-top: 1rem;

      font-size: 2rem;
    }

    img {
      width: 20rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
