import styled from "styled-components";



export const FreeAppleMusicSectionWrapper = styled.section`
    background-color: #f8f8f9;
    padding: 9px 0;
    text-align: center;

    @media screen and (max-width: 735px) {
        & h2 {
            max-width: 180px;
            margin: 0 auto;
        }
    }
`

export const FreeAppleMusicSectionTitle = styled.h2`
    margin: 0;
    font-size: 12px;
    line-height: 1.3333733333;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: var(--color-satin-deep-black);

    & a {
        text-decoration: none;
        color: var(--color-royal-navy-blue);
    }
`