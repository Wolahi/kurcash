import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100%;
        height: 100vh;
        background: #F9f9f9;
    }
    
    #root {
        height: 100%;
    }

    * {
        font-family: "Letovo", sans-serif;
    }
`;
