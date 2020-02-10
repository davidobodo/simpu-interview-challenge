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
        font-family: 'IBM Plex Sans', sans-serif;
        width: 100vw;
        max-width: 1440px;
        margin: 0 auto;
        border: 1px solid #BCB5B9;
    }

    h2{
        font-size: 20px;
        color: #212242;
    }
    
    h3{
        font-size: 15px;
    }
    
    h4{
        font-size: 14px;
        color: #212242;
    }
    
    h5{
        font-size: 13px;
        font-weight: 200;
        color: #212242;
    }

    h6{
        font-size: 12px;
        color: #595e8a;
    }

    p{
        font-size: 14px;
    }
`;