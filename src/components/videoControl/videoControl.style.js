import play from "../../assets/img/play.svg"
import pause from "../../assets/img/pause.svg"
import styled from "styled-components"

export const VideoControlWrapper = styled.div`
    position: absolute;
    bottom: 35px;
    right: 35px;
    border-radius: 50%;

    &[data-play="false"] {
        & button::after {
            -webkit-mask-image: url(${play});
            mask-image: url(${play});
        }
    }

    &[data-play="true"] {
        & button::after {
            -webkit-mask-image: url(${pause});
            mask-image: url(${pause});
        }
    }

    @media screen and (max-width: 735px){
        top: 20px;
        right: 20px;

        & button {
            width: 40px;
            height: 40px;
        }
    }
`

export const VideoControlButton = styled.button`
    width: 44px;
    height: 44px;
    background-color: transparent;
    position: relative;
    border: none;
    bottom: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;

    &:active {
        transform: scale(95%);
    }
    
    &::after {
        background-color: white;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        content: "";
        width: 20px;
        height: 20px;
        display: block;
        margin: 0 auto;
        position: absolute;
        top: 26%; 
        left: 50%; transform: translateX(-50%);
    }

    &::before {
        content: "";
        /* width: 44px;
        height: 44px; */
        width: 100%;
        height: 100%;
        border: 2px solid white;
        display: block;
        border-radius: 50%;
        background-color: transparent;
        position: absolute;
        top: 0;
    }
`