import styled from "styled-components"
import "../../assets/css/variables.css"

export const SliderWrapper = styled.div`
    
`

export const SliderList = styled.ul`
    display: grid;
    grid-template-columns: repeat(11, 1250px);
    grid-column-gap: 10px;
    grid-template-rows: 667px;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    left: 10px;
    z-index: -1;
    transform: translateX(calc());
    transition: all 0.5s ease;

    @media screen and (max-width: 1440px) {
        grid-template-columns: repeat(11, 980px);
        grid-template-rows: 520px;
    }

    @media screen and (max-width: 1080px) {
        grid-template-columns: repeat(11, 690px);
        grid-template-rows: 368px;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(11, 270px);
        grid-template-rows: 495px;
    }
`



export const SliderControl = styled.div`
    display: grid;
    grid-template-columns: repeat(11, max-content);
    grid-column-gap: 14px;
    margin: 0 auto;
    width: max-content;
    padding: 12px 0;
`

export const SliderSideButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
`

export const SliderControlButton = styled.button`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.16);
    border: none;
    padding: 0;
    cursor: pointer;
    &[data-active="true"] {
        background-color: rgba(0,0,0,0.54);
    }
`


export const SliderBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1270px 1fr;
    overflow: hidden;

    @media screen and (max-width: 1440px) {
        grid-template-columns: 1fr 1000px 1fr;
    }

    @media screen and (max-width: 1080px) {
        grid-template-columns: 1fr 710px 1fr;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 290px 1fr;
    }
`