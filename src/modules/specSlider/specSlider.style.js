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

    @media screen and (max-width: 1485px) {
        & {
            left: 0;
        }
    }
`

export const SpecSliderItem = styled.li`
    background-color: #fff;
    border-radius: 18px;
    overflow: hidden;
    position: relative;

    &[data-active="true"] {
        color: red;
    }

    &:nth-child(1) {
        background-image: url("https://www.apple.com/v/airpods/r/images/overview/tile_onetap_setup__fzj1m8dhjoq6_large.jpg");
        background-repeat: no-repeat;
        background-size: auto;
        background-position-x: 30px;
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
`

export const SpecSliderRealContent = styled.span`

`

export const SpecSliderRealTitle = styled.h4`
    margin: 0;
    font-size: 24px;
    line-height: 1.1666666667;
    font-weight: 600;
    letter-spacing: .009em;
`

export const SpecSliderItemOpenButton = styled.button`
    width: 33px;
    height: 33px;
    padding: 0;
    margin: 0;
    background-color: black;
    border-radius: 50%;
    position: absolute;
    border: none;
    bottom: 23px;
    right: 23px;

    & svg {
        position: relative;
        top: 1px;
    }
`

export const SpecSliderFakeContent = styled.span`
    margin: 0;
    font-size: 24px;
    line-height: 1.1666666667;
    font-weight: 600;
    letter-spacing: .009em;
`

export const SpecSliderFakeTitle = styled.h4`
    margin: 0;
    font-size: 24px;
    line-height: 1.1666666667;
    font-weight: 600;
    letter-spacing: .009em;
    margin-bottom: 14px;
`

export const SpecSliderFakeDesc = styled.p`
    font-size: 17px;
    line-height: 1.4705882353;
    font-weight: 400;
    letter-spacing: -0.022em;
    margin: 0;
`