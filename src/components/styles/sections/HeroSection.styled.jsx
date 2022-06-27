import styled from "styled-components";
import heroImage from '../../../images/hero-image.png'

export const StyledHeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background: url("${heroImage}") center no-repeat;
  background-size:cover;
  position: relative;
  display: flex;
  flex-direction: column-reverse;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-size:cover;
    height:70vh;
  }

`;

export const HeroContent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.text.l};
  margin: 0 0 13rem 40px;
  letter-spacing: 0.1rem;

  strong {
    font-weight: 900;
    letter-spacing: 0.25rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: ${({ theme }) => theme.text.xs};
    margin:0 0 60px 0;
  }

`;
