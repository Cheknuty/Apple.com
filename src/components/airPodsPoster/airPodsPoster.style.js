import styled from "styled-components"

export const AirPodsPosterWrapper = styled.li`
    border-radius: 18px;
    overflow: hidden;
    text-align: center;
    height: 680px;
    position: relative;

    @media screen and (max-width: 1075px){
        height: 600px;

        & h3 {
            font-size: 100px;
            line-height: .96;
            font-weight: 600;
            letter-spacing: -0.0015em;
        }
    }

    @media screen and (max-width: 735px){
        height: 490px;
        margin: 0 auto;

        & h3 {
            font-size: 48px;
            line-height: 1;
            font-weight: 700;
            letter-spacing: -0.00043em;
        }

        & p:first-child {
            font-size: 19px;
            line-height: 1.4211026316;
            letter-spacing: .012em;
        }

        & p:last-child {
            font-size: 19px;
            line-height: 1.4211026316;
            letter-spacing: .012em;
        }
    }
`

export const AirPodsPosterVideo = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;

    &:nth-child(1) {
        display: block;
    }

    &:nth-child(2) {
        display: none;
        height: auto;
    }

    @media screen and (max-width: 735px) {
        &:nth-child(1) {
            display: none;
        }

        &:nth-child(2) {
            display: block;
        }
    }

    @media screen and (max-width: 400px) {
        &:nth-child(2) {
            height: 100%;
        }
    }
`

export const AirPodsPosterVideoSource = styled.source`

`

export const AirPodsPosterContent  = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 735px) {
        top: 300px;
    }

`

export const AirPodsPosterTitle = styled.h3`
    margin: 0;
    font-size: 120px;
    line-height: .8;
    font-weight: 600;
    letter-spacing: -0.0018em;
    color: #fff;
    margin-bottom: 12px;
`

export const AirPodsPosterSubtitle = styled.p`
    margin: 0;
    font-size: 21px;
    line-height: 1.381002381;
    letter-spacing: .011em;
    color: #fff;
    font-weight: 700;
`

export const AirPodsPosterDesc = styled.p`
    margin: 0;
    font-size: 21px;
    line-height: 1.381002381;
    letter-spacing: .011em;
    color: #fff;
    margin-bottom: 14px;

    & + div {
        margin: 0 auto;
    }
`