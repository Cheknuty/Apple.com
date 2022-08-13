import styled from "styled-components"
import "../../assets/css/variables.css"

export const HeplSectionWrapper = styled.section`
    padding: 20px 0;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-screen-glow);
    color: var(--color-royal-navy-blue);
    @media screen and (max-width: 735px) {
        &  {
            flex-direction: column;
            text-align: center;
            
        }

        & div {
            max-width: 230px;
            margin-top: 4px;
        }

        & img {
            margin-right: 0;
        }
    }
`

export const HeplSectionImg = styled.img`
    margin-right: 13px;
`

export const HeplSectionTitle = styled.a`
    margin: 0;
    color: var(--color-royal-navy-blue);
    font-weight: 400;
    cursor: pointer;
    margin-right: 4px;

    &:hover {
        text-decoration: underline;
    }
`

export const HelpSectionBox = styled.div`
    
`