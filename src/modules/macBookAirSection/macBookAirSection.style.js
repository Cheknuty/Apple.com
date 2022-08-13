import styled from "styled-components"
import "../../assets/css/variables.css"

export const MacBookAirSectionWrapper = styled.section`
    background-color: var(--color-primary);
    margin-bottom: 7px;
    & a {
        text-decoration: none;
        background-position-x: calc(50%  + 185px);
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url("https://droider.ru/wp-content/uploads/2022/06/apple-wwdc22-macbook-air-4up-colors-hero-220606.jpg");
        margin: 0 0 24px 0;
        display: block;
        height: 670px;
        color: var(--color-satin-deep-black);
    }

    @media screen and (max-width: 1070px) {
        & h2 {
            font-size: 48px;
            line-height: 1.08349;
            letter-spacing: -.002em;
            margin-bottom: 2px;
        }

        & img {
            width: 220px;
            margin-bottom: 9px;
        }

        & a {
            background-position-x: center;
            background-position-y: 230px;
            background-size: 600px 400px;
        }
    }

    @media screen and (max-width: 735px) {
        & h2 {
            font-size: 32px;
            line-height: 1.125;
            letter-spacing: .004em;
        }

        & img {
            width: 180px;
            margin-bottom: 7px;
        }

        & a {
            height: 500px;
            background-position-y: 180px;
            background-size: 450px 300px;
        }
    }
`


export const MacBookAirSectionTitle = styled.h2`
    font-size: 56px;
    line-height: 1.07143;
    font-weight: 600;
    letter-spacing: -.005em;
    margin: 0 0 12px 0;
`

export const MacBookAirSectionBox = styled.div`
    text-align: center;
    display: inline-block;
    padding: 240px 0 0 65px;

    @media screen and (max-width: 1070px) {
        padding: 0;
        padding-top: 60px;
        margin: 0 auto;
        display: block;
    }

    @media screen and (max-width: 735px) {
        padding-top: 31px;
    }
`

export const MacBookAirSectionSubtitle = styled.img`
    margin-bottom: 14px;

    & + div a {
        height: auto;
        display: inline-block;
        color: var(--color-royal-navy-blue)
    }
`

