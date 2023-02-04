import { css } from "@emotion/react";

const ContentResponsiveStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px){
        justify-content: flex-start;
        section {
            width: 100vw;
            height: 100vh;
        }
    }
`

export default ContentResponsiveStyle;