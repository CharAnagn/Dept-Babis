import styled from "styled-components";

export const ScaledCardRightContainer = styled.section`
  display: flex;
  
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap:wrap;
  }
  
`;

export const ScaledClientCardRight = styled.div`
  position: relative;
  display: flex;
  flex-grow: 2;
  img {
    object-fit: cover;
    width: 100%;
    height: 80vh;
    filter: contrast(80%);
  }
`;

export const ScaledClientCardLeft = styled.div`
  display: flex;
  flex-shrink: 9;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  padding: 0 25px 0 25px;
  font-size:${({ theme }) => theme.text.s};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size:${({ theme }) => theme.text.xxs};
    gap:15px;
    margin:400px 0 100px 0;
  }
`;
