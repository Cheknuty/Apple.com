import styled from "styled-components";


export const AirPodsSectionWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    align-items: flex-start;
    justify-content: center;
    grid-template-columns: repeat(6, 80px);
    grid-column-gap: 20px;
    padding: 8px 0;
    width: 100%;

    @media screen and (max-width: 630px){
        overflow-x: scroll;
    }
`

export const AirPodsSectionItem = styled.li`
    & a {
        color: var(--color-satin-deep-black);
        font-size: 17px;
        line-height: 1.4705882353;
        font-weight: 400;
        text-decoration: none;

        &:hover {
            color: var(--color-royal-navy-blue);
        }
    }
`

export const AirPodsSectionItemTitle = styled.h3`
    font-size: 12px;
    line-height: 1.4705882353;
    font-weight: 400;
    margin: 0;
    text-align: center;
`

export const AirPodsSectionItemIcon = styled.img`
    display: block;
    margin: 0 auto 7px auto;
`