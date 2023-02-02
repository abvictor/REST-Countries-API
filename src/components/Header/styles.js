import styled from "styled-components";

export const Container = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;

    height: 6rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.secundary};

    p {
      font-size: 0.75rem;
      margin-right: 2rem;
      margin-bottom: 0.5rem;
    }
    .color-mode {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 0.75rem;
      text-align: center;
    }
    .color-mode__items {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      text-align: center;
      p {
        font-size: 0.85rem;
      }
    }
  }
  @media screen and (max-width: 915px) {
    .header {
      width: 100%;
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: space-around;

      font-size: 1rem;

      padding: 0rem;
    }
  }
  @media screen and (max-width: 320px) {
    .header {
      width: 100%;
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: space-around;

      font-size: 1rem;

      padding: 0rem;
    }
  }
`;
