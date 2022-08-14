import styled from "styled-components";


export const SpecSliderWrapper = styled.div`
    text-align: center;
    color: var(--color-satin-deep-black);
`
export const SpecSliderTitle = styled.h3`
    font-size: 64px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.0009em;
    margin: 0 auto 52px auto;
    max-width: 700px;

    @media screen and (max-width: 735px) {
        font-size: 32px;
        line-height: 1;
        letter-spacing: -0.00029em;
        max-width: 400px;
        margin-bottom: 27px;
    }
`

export const SpecSliderList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, 403px);
    grid-template-rows: 484px;
    grid-column-gap: 20px;
    position: relative;
    left: calc(50% - 740px);
    transition: all 0.7s ease-in-out;

    @media screen and (max-width: 1485px) {
        & {
            left: 0;
        }
    }

    @media screen and (max-width: 1075px) {
        & {
            grid-template-columns: repeat(5, 350px);
            grid-template-rows: 450px;
        }
    }

    @media screen and (max-width: 735px) {
        & {
            grid-template-columns: repeat(5, 300px);
            grid-template-rows: 410px;
        }
    }

`

export const SpecSliderItem = styled.li`
    background-color: #fff;
    border-radius: 18px;
    overflow: hidden;
    position: relative;

    &[data-active="true"]{
        & div:nth-last-of-type(2) {
            opacity: 0;
        }
    }

    &:nth-child(1) div:nth-last-of-type(2) {
        background-image: url("https://www.apple.com/v/airpods/r/images/overview/tile_onetap_setup__fzj1m8dhjoq6_large.jpg");
        background-repeat: no-repeat;
        background-size: auto;
        background-position-x: 30px;
    }

    &:nth-child(2) div:nth-last-of-type(2) {
        background-image: url("https://www.apple.com/v/airpods/r/images/overview/tile_automatic_switching__etjisgj91gk2_large.jpg");
        background-repeat: no-repeat;
        background-size: auto;
        background-position-x: center;
        background-position-y: 160px;
    }

    &:nth-child(3) div:nth-last-of-type(2) {
        background-image: url("https://www.apple.com/v/airpods/r/images/overview/tile_audio_sharing__ord9ku1kssq6_large.jpg");
        background-repeat: no-repeat;
        background-size: auto;
        background-position-x: center;
        background-position-y: 30px;
    }

    &:nth-child(4) div:nth-last-of-type(2) p {
        display: inline-block;
        background: linear-gradient(90deg,#ffa54d,#f07bc5 50%,#43aeff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 42px;
        line-height: 1;
        font-weight: 700;
        letter-spacing: -0.00043em;
        text-align: center;
        max-width: 320px;
        position: absolute;
        top: 160px;
        left: 36px;
    }

    &:nth-child(5) div:nth-last-of-type(2) {
        background-image: url("https://www.apple.com/v/airpods/r/images/overview/tile_announce_notifications__f2jmuafd1wey_small_2x.jpg");
        background-repeat: no-repeat;
        background-size: auto;
        background-position-x: center;
        background-position-y: 85px;
        background-size: 144px;

        & p {
            font-size: 21px;
            line-height: 1.1904761905;
            font-weight: 600;
            letter-spacing: .011em;
            position: absolute;
            top: 220px;
            left: 50px;
            max-width: 303px;
            color: #555;
        }
    }

    @media screen and (max-width: 1075px) {
        &:nth-child(1) div:nth-last-of-type(2) {
            background-image: url("https://www.apple.com/v/airpods/r/images/overview/tile_onetap_setup__fzj1m8dhjoq6_medium_2x.jpg");
            background-size: 271px;
            background-position-y: 25px;
            background-position-x: center;
        }

        &:nth-child(2) div:nth-last-of-type(2) {
            background-size: 288px;
        }

        &:nth-child(4) div:nth-last-of-type(2) p {
            font-size: 36px;
            max-width: 267px;
            top: 140px;
        }
    }

    @media screen and (max-width: 735px) {
        &:nth-child(1) div:nth-last-of-type(2) {
            background-image: url("https://www.apple.com/v/airpods/r/images/overview/tile_onetap_setup__fzj1m8dhjoq6_small_2x.jpg");
            background-size: 232px;
            background-position-y: 35px;
        }

        &:nth-child(2) div:nth-last-of-type(2) {
            background-image: url("https://www.apple.com/v/airpods/r/images/overview/tile_automatic_switching__etjisgj91gk2_small_2x.jpg");
            background-size: 252px;
        }

        &:nth-child(3) div:nth-last-of-type(2) {
            background-image: url("https://www.apple.com/v/airpods/r/images/overview/tile_audio_sharing__ord9ku1kssq6_small_2x.jpg");
            background-size: 222px;
            background-position-y: 40px;
        }

        &:nth-child(4) div:nth-last-of-type(2) p{
            left: 15px;
        }

        &:nth-child(5) div:nth-last-of-type(2) {
            background-image: url("https://www.apple.com/v/airpods/r/images/overview/tile_announce_notifications__f2jmuafd1wey_small_2x.jpg");
            background-size: 127px;

            & p {
                font-size: 19px;
                line-height: 1.2105263158;
                letter-spacing: .012em;
                max-width: 250px;
                left: 25px;
                top: 200px;
            }
        }
    }

`

export const SpecSliderControl = styled.div`
    display: grid;
    grid-template-columns: 30px 30px;
    grid-template-rows: 30px;
    grid-column-gap: 10px;
    max-width: max-content;
    margin: 0 auto;
    padding: 24px 0;
`

export const SpecSliderButton = styled.button`
    border: 2px solid #000;
    padding: none;
    background-color: #fff;
    border-radius: 50%;
    padding: 0;
    cursor: pointer;

    & svg {
        position: relative;
        top: 1px;
    }
`

export const SpecSliderBox = styled.div`
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: all 0.1 ease-in-out;
`

export const SpecSliderItemTitle = styled.h3`
    margin: 0 0 30px 45px;
    font-size: 24px;
    line-height: 1.1666666667;
    font-weight: 600;
    letter-spacing: .009em;
    color: var(--color-satin-deep-black);
    position: absolute;
    bottom: 0;
    left: 0;

    @media screen and (max-width: 735px) {
        & {
            font-size: 19px;
            line-height: 1.2105263158;
            font-weight: 600;
            letter-spacing: .012em;
            margin: 0 0 20px 30px;
        }
    }
`

export const SpecSliderItemDesc = styled.p`
    margin: 0;
`