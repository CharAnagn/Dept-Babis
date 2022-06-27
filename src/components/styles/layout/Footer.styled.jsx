import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 90%;
  height:30vh;
  display: flex;
  background:${({ theme }) => theme.colors.black};
  
  bottom:0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap:1px;
    flex-direction:column;
  }
 
`;

export const FooterNav = styled.div`
  a {
    margin-right: 0.5rem;
  }

  &:last-child {
    margin: 0;
  }
`;