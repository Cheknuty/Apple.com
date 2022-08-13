import styled from "styled-components";


export const FooterPrimaryWrapper = styled.footer`
    background-color: var(--color-screen-glow);
    padding: 0 10px;
`

export const FooterPrimaryContainer = styled.div`
    max-width: 980px;
    margin: 0 auto;
    padding-top: 20px;
    border-top: 1px solid #d2d2d7;
`

export const FooterPrimaryContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: none;
    }

`

export const FooterPrimaryColumn = styled.div`
    display: grid;
    grid-row-gap: 24px;
    grid-template-columns: max-content;
`

export const FooterPrimaryList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: max-content;
    grid-row-gap: 9px;
`

export const FooterPrimaryItemH = styled.li`
    font-size: 12px;
    line-height: 1.33337;
    letter-spacing: -0.01em;
    font-weight: 600;
    color: var(--color-satin-deep-black);
`

export const FooterPrimaryItem = styled.li`
    & a {
        font-size: 12px;
        line-height: 1.33337;
        letter-spacing: -0.01em;
        font-weight: 500;
        color: #424245;
        text-decoration: none;
    }
`

export const FooterPrimaryCTA = styled.div`
    padding: 34px 0 21px 0;
`

export const FooterPrimaryCTATop = styled.p`
    margin: 0;
    font-size: 12px;
    line-height: 1.33337;
    font-weight: 400;
    color: #6e6e89;
    margin-bottom: 7px;
    padding-bottom: 8px;
    border-bottom: 1px solid #d2d2d7;

    & a {
        color: var(--color-royal-navy-blue);
        text-decoration: none;
    }

    @media screen and (max-width: 800px) {
        border: none;
    }
`

export const FooterPrimaryCTABottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: block;
    }
`

export const FooterPrimaryCTABottomDesc = styled.p`
    margin: 0;
    font-size: 12px;
    line-height: 1.33337;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #6e6e89;
`

export const FooterPrimaryCTABottomDescSpan = styled.span`
    margin: 0;
    font-size: 12px;
    line-height: 1.33337;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: var(--color-satin-deep-black);
    margin: 0 10px;

    @media screen and (max-width: 800px) {
        padding-top: 20px;
        display: block;
        margin: 0;
    }
`