import styled from "styled-components";

export const ShowMeWork = styled.div`
display:flex;
justify-content: space-between;
margin: 10px 5px;

p{
    color:${({ theme }) => theme.colors.grey};
    font-size:${({ theme }) => theme.text.s};
}

a{
    color:${({ theme }) => theme.colors.black};
    text-decoration:underline;
}


`