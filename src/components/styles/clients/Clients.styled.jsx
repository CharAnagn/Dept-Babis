import styled from "styled-components";

export const ClientsContainer = styled.section`
  display: grid;
  grid-template-columns: 0.25fr 0.25fr 0.1fr;
  width: 100%;
  height: 60vh;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 200px 0 100px 0;
}
  img {
    width: 171px;
    height: 90px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 114px;
    height: 60px;
  
    }
  }
`;
export const ClientHeader = styled.section`
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 20vh;
  justify-content: center;
  padding: 50px 0 50px 25px;
  


  h1 {
    font-size: ${({ theme }) => theme.text.l};
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: ${({ theme }) => theme.text.s};
  }
  }
  p {
    font-size: ${({ theme }) => theme.text.m};
    letter-spacing: 2px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: ${({ theme }) => theme.text.xs};
  }
  }
`;
