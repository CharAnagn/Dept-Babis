import styled from "styled-components";

export const FormContainer = styled.section`
display:flex;
flex-wrap:wrap;
width:100%;
height:40vh;
color:${({ theme }) => theme.colors.black};
justify-content: left;
align-items: center;

@media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content:center;
}


h1{
    display:flex;
    flex-shrink:8;
    font-size:${({ theme }) => theme.text.xl};
    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size:${({ theme }) => theme.text.s};
    }
    
}
`

export const FormSection = styled.form`
display:grid;


@media (max-width: ${({ theme }) => theme.mobile}) {
    display:flex;
    flex-direction:column;
}

input{
    border: none;
    border-bottom: 2px solid grey;
    background-color:${({ theme }) => theme.colors.background};
    height:50px;
    font-size: ${({ theme }) => theme.text.xs};
    @media (max-width: ${({ theme }) => theme.mobile}) {
        height:10px;
    }
    
}
`