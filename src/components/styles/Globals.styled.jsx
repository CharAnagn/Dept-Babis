import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
}


html{
    font-family:"Lato", sans-serif;
    scroll-behavior:smooth;
    background:${({ theme }) => theme.colors.background};
    color:${({ theme }) => theme.colors.white};
}


a{
    text-decoration:none;
}

ul{
    list-style:none;
}

.down{
    width:100%;
    height:100%;
    position:absolute;
    z-index:150;
    background:${({ theme }) => theme.colors.black};
    
}

.text-area{
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    width:100%;
    z-index:152;
    font-size:${({ theme }) => theme.text.xxl};
}

.text-area > .text{
    opacity:0;
}
`;
