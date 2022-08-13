import styled from "styled-components"
import "../../assets/css/variables.css"

export const ShopSectionWrapper = styled.section`
    background-color: var(--color-grams-hair);
    margin-bottom: 10px;
    text-align: center;
    background-position-y: bottom;
    background-position-x: center;
    background-size: 3615px 750px;
    // background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://www.apple.com/v/home/aq/images/heroes/back-to-school-2022/hero_bts__bcuslanw39xe_large.jpg");
    & a {
        text-decoration: none;
        
        display: block;
        height: 680px;
        color: var(--color-satin-deep-black);
    }

    @media screen and (max-width: 1070px) {
        & h2 {
            font-size: 48px;
            line-height: 1.08349;
            letter-spacing: -.002em;
        }

        & p {
            font-size: 24px;
            line-height: 1.16667;
            letter-spacing: .009em;
        }

        & a {
            height: 650px;
        }
    }

    @media screen and (max-width: 735px) {
        & {
            background-size: 2665px 550px;
        }

        & h2 {
            font-size: 32px;
            line-height: 1.125;
            letter-spacing: .004em;
            max-width: 270px;
            margin: 0 auto;
            margin-bottom: 4px;
            padding-top: 34px;
        }

        & p {
            font-size: 17px;
            line-height: 1.23536;
            letter-spacing: -.022em;
            margin: 0 auto;
            margin-bttom: 12px;
            max-width: 180px;
        }

        & a {
            height: 520px;
        }
    }
`

export const ShopSectionTitle = styled.h2`
    font-style: italic;
    font-weight: bold;
    font-size: 56px;
    line-height: 1.07143;
    letter-spacing: -.005em;
    margin:0 0 7px 0;
    padding-top: 47px;

    & span {
        color: var(--color-paper-hearts)
    }
`

export const ShopSectionSubtitle = styled.p`
    margin-bottom: 14px;
    font-size: 28px;
    line-height: 1.10722;
    font-weight: 400;
    letter-spacing: .004em;
    margin-top: 0;

    & + div a {
        color: var(--color-royal-navy-blue);
        height: auto;
    }
`