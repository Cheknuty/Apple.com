import styled from "styled-components";


export const FooterFakePanelWrapper = styled.div`
    overflow: hidden;
    display: none;

    @media screen and (max-width: 800px) {
        & {
            display: block;
        }
    }
`

export const FooterFakePanelSet = styled.article`

`