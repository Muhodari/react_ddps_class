import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth:1280px;
        --white:#fff;
        --lightGrey:#eee;
        --medGrey:#35353535;
        --darkGrey:#1c1c1c;
        --fontSuperBig:2.5rem;
        --fontBig:1.5rem;
        --fontMed:1rem;
        --fontSmall:0.5rem;
    }
    *{
        box-sizing:border-box;
        font-family: 'Abel',sans-serif;

    }

body{
    margin: 0;
    padding: 0;
}
h1{
    font-size: 2rem;
    font-weight: 600;
    color: var(---white);
}
h3{
    font-size: 1.5rem;
    font-weight: 600;
}

p{
    font-size: 1rem;
    color: var(---white);
}

`;