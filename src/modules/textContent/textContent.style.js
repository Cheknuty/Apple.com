import styled from "styled-components";


export const TextContentWrapper = styled.div`
    background-color: var(--color-screen-glow);
    padding: 0 10px;
`

export const TextContentSection = styled.section`
    max-width: 980px;
    margin: 0 auto;
    padding: 17px 0px 11px 0px;
`

export const TextContentDesc = styled.p`
    margin: 0;
    font-size: 12px;
    line-height: 1.33337;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #6e6e73;
    
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`

export const TextContentLink = styled.a`
    margin: 0;
    font-size: 12px;
    line-height: 1.33337;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #6e6e89;
    text-decoration: none;
`