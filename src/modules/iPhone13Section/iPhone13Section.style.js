import styled from "styled-components"
import "../../assets/css/variables.css"

export const IPhone13SectionWrapper = styled.section`
    background-color: var(--color-primary);
    margin-bottom: 10px;
    text-align: center;
    background-position-y: bottom;
    background-position-x: center;
    background-size: 3340px 700px;
    background-repeat: no-repeat;
    background-image: url("https://www.apple.com/v/home/aq/images/heroes/iphone-13/hero_iphone13_avail__gnqqkzuai6um_large.jpg");
    & a {
        text-decoration: none;
        display: block;
        height: 640px;
        color: var(--color-satin-deep-black);
    }

    @media screen and (max-width: 1070px) {
        & h2 {
            font-size: 48px;
            line-height: 1.08349;
            letter-spacing: -.002em;
            margin-bottom: 5px;
            margin-top: 53px;
        }

        & p {
            font-size: 24px;
            letter-spacing: .009em;
            line-height: 1.16667;
        }

        & a {
            height: 600px;
        }
    }

    @media screen and (max-width: 730px) {
        & h2 {
            font-size: 32px;
            line-height: 1.125;
            letter-spacing: .004em;
            margin-bottom: 5px;
            margin-top: 37px;
        }

        & p {
            font-size: 24px;
            letter-spacing: .009em;
            line-height: 1.16667;
        }

        & {
            background-size: 2447px 550px;
        }

        & a {
            height: 530px;
        }
    }
`

export const IPhone13SectionTitle = styled.h2`
    font-size: 56px;
    line-height: 1.07143;
    font-weight: 600;
    letter-spacing: -.005em;
    margin: 0 0 12px 0;
    padding-top: 47px;
`

export const IPhone13SectionSubtitle = styled.p`
    margin-bottom: 14px;
    font-size: 28px;
    line-height: 1.10722;
    font-weight: 400;
    letter-spacing: .004em;
    margin-top: 0;

    & + div a {
        height: auto;
        display: inline-block;
        color: var(--color-royal-navy-blue)
    }
`