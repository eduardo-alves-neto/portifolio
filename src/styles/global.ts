import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --background: #23272f;
    --text-body: #56b6cc;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1080px){ 
        font-size: 93.75%;
    }
    @media (max-width: 720px){ 
        font-size: 87.5%;
    }
}

body{
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textBody};
    -webkit-font-smoothing: antialiased;
    div{
        /* border: 1px solid red; */

    }

}
body, input, button, textarea{
font-family: 'Roboto',Arial, Helvetica, sans-serif;
font-weight: 400;

}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`;