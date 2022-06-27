import styled from "styled-components";

export const ClientQuoteContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  background: ${({ theme }) => theme.colors.black};
  gap:2rem;

  h2 {
    font-size: ${({ theme }) => theme.text.l};
    flex-wrap:wrap;
    display:flex;
    width:90%;
    text-align:Center;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: ${({ theme }) => theme.text.s};
    }
  }

  p {
    font-size: ${({ theme }) => theme.text.s};
    text-transform: uppercase;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: ${({ theme }) => theme.text.xs};
    }
  }
`;
