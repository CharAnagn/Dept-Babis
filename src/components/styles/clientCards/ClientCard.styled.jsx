import styled from "styled-components";

export const ClientCardContainer = styled.section`
  display: flex;
  width: 100%;
  height: 50vh;
  flex-wrap: wrap;
`;

export const ClientCardLeft = styled.div`
  position: relative;
  flex-grow: 1;
  filter: brightness(60%);
  transition: 0.2s ease-in-out;

  img {
    object-fit: cover;
    width: 100%;
    height: 50vh;
  }
  :hover {
    filter: brightness(75%);
  }
`;

export const ClientCardRight = styled.div`
  position: relative;
  flex-grow: 1;
  filter: brightness(60%);
  transition: 0.2s ease-in-out;

  img {
    object-fit: cover;
    width: 100%;
    height: 50vh;
  }
  :hover {
    filter: brightness(75%);
  }
`;

export const ClientCardContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 50px;
  left: 16px;
  flex-wrap: wrap;
  z-index: 100;

  h1 {
    margin: 20px 0;
    font-size: ${({ theme }) => theme.text.l};
    font-weight: 500;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: ${({ theme }) => theme.text.m};
      margin:0;
    }
  }
  p {
    font-size: ${({ theme }) => theme.text.xxs};
    text-transform: uppercase;
  }
  a {
    font-size: ${({ theme }) => theme.text.xxs};
  }
`;
