import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *:before,
    *:after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
    }

    h2{
        font-size: 20px;
    }

    h3{
        font-size: 15px;
    }

    h4{
        font-size: 14px;
    }

    h5{
        font-size: 13px;
    }

    h6{
        font-size: 12px;
    }

    p{
        font-size: 14px;
    }
`