import styled from "styled-components";
export const SliderItemWrapper = styled.li`
    overflow-y: hidden;
    height: 668px;
    position: relative;
    z-index: 25;

    &[data-active="true"] {
        & div:nth-child(7) {
            transform: translateY(-25px);
            opacity: 1;
        }
    }

    &[data-active="true"] {
        & div:nth-child(8) {
            background-color: transparent;

            @media screen and (max-width: 800px) {
                background: linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.7));
            }
        }
    }

    @media screen and (max-width: 800px) {
        &:nth-child(1) div:nth-last-of-type(2) {
            left: 43px;
        }

        &:nth-child(5) div:nth-last-of-type(2) {
            left: 60px;
        }

        &:nth-child(8) div:nth-last-of-type(2) {
            left: 43px;
        }

        &:nth-child(11) div:nth-last-of-type(2) {
            left: 60px;
        }
    }
`

export const SliderItemImg = styled.img`
    &:nth-child(1) {
        display: block;
    }

    &:nth-child(2) {
        display: none;
    }

    &:nth-child(3) {
        display: none;
    }

    &:nth-child(4) {
        display: none;
    }
    &:nth-child(5) {
        display: none;
    }
    &:nth-child(6) {
        display: none;
    }
    @media screen and (max-width: 1440px) {
        &:nth-child(1) {
            display: none;
        }

        &:nth-child(2) {
            display: block;
            transform: scale(105%);
        }
    }

    @media screen and (max-width: 1060px) {
        &:nth-child(2) {
        display: none;
    }

        &:nth-child(3) {
            display: block;
        }
    }

    @media screen and (max-width: 800px) {
        &:nth-child(3) {
            display: none; 
        }

        &:nth-child(4) {
            display: block;
            transform: scale(103%);
        }

        &:nth-child(5) {
            position: absolute;
            top: 20px;
            display: block;
            left: 50%;
            transform: translateX(-50%);
            width: 68px;
        }

        &:nth-child(6) {
            display: block;
            position: absolute;
            top: 58px;
            width: 220px;
            height: 54px;
            object-fit: contain;
            left: 50%;
            transform: translateX(-50%);
            border: none;
        }
    }

`

export const SliderItemText = styled.div`
    bottom: 20px;
    left: 65px;
    display: flex;
    align-items: center;
    position: absolute;
    opacity: 0;
    transition: all 1.5s ease;
    z-index: 80;

    @media screen and (max-width: 1440px) {
        bottom: 160px;
    }

    @media screen and (max-width: 1080px) {
        bottom: 300px;
        max-width: 500px;
    }

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        left: 15px;
        max-width: 230px;
        bottom: 175px;

        &:nth-last-of-type(1){
            color: red;
            
        }

        & button {
            margin: 0;
            margin-top: 12px;
        }
    }
`

export const SliderItemButton = styled.button`
    margin: 0;
    padding: 0;
    margin-right: 40px;
    padding: 12px 22px;
    background-color: #fff;
    border-radius: 980px;
    border: none;
    font-size: 14px;
    line-height: 1.42859;
    font-weight: 700;
    letter-spacing: -.016em;
    
    @media screen and (max-width: 1080px) {
        font-size: 14px;
        line-height: 1.42859;
        font-weight: 400;
        letter-spacing: -.016em;
        margin-right: 30px;
        width: 146px;
    }

    @media screen and (max-width: 800px) {
        padding: 12px 22px;
        font-size: 14px;
        line-height: 1.42859;
        letter-spacing: -.016em;
    }
`

export const SliderItemDesc = styled.p`
    margin: 0;
    text-align: center;

    @media screen and (max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items: center;

        & button {
            margin: 0;
        }
    }
`

export const SliderItemGenre = styled.span`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.1;
    letter-spacing: 0em;
    text-shadow: 0px 0px 5px rgb(0 0 0 / 60%);
    color: #fff;

    &::after {
        content: "";
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #fff;
        margin: 0 5px 3px 5px;
    }

    @media screen and (max-width: 1080px) {
        font-size: 19px;
        line-height: 1.42859;
        letter-spacing: -.016em;
    }

    @media screen and (max-width: 800px) {
        &::after {
            display: none;
        }
    }

    @media screen and (max-width: 800px) {
        font-size: 15px;
        line-height: 1.33338;
        letter-spacing: 0em;
    }
`

export const SliderItemAboutFilm = styled.span`
    font-size: 20px;
    line-height: 1.1;
    font-weight: 400;
    letter-spacing: 0em;
    text-shadow: 0px 0px 5px rgb(0 0 0 / 60%);
    @media screen and (max-width: 1080px) {
        font-size: 19px;
        line-height: 1.42859;
        letter-spacing: -.016em;
    }

    @media screen and (max-width: 800px) {
        font-size: 15px;
        line-height: 1.33338;
        letter-spacing: 0em;
    }
`

export const SliderItemFace = styled.div`
    position: relative;
    z-index: 75;
    background-color: rgba(255, 255, 255, 0.65);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    transition: all 1s ease;
`