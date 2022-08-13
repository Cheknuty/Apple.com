import styled from "styled-components";


export const AirPodsProPosterWrapper = styled.li`
overflow: hidden;
    width: 100%;
    height: 704px;
    position: relative;
    background-image: url("https://www.apple.com/v/airpods/r/images/overview/airpods_pro_left__bvanpj0ujnf6_large_2x.png") ,url("https://www.apple.com/v/airpods/r/images/overview/airpods_pro_right__fm0wwisa76em_large_2x.png");
    background-repeat: no-repeat;
    background-position-x: calc(50% - 240px), calc(50% + 240px);
    background-position-y: center, center;
    background-size: 430px;
    background-color: #000;
    border-radius: 18px;
    overflow: hidden;

    @media screen and (max-width: 1075px) {
        height: 600px;
        background-size: 360px;
        background-position-x: calc(50% - 210px), calc(50% + 210px);

        & h3 {
            text-shadow: 0 2px 50px rgb(0 0 0 / 80%);
            font-size: 100px;
            line-height: .96;
            letter-spacing: -0.0015em;
        }

        & p {
            margin-bottom: 195px;
        }
    }

    @media screen and (max-width: 840px){
        background-size: 320px;
        background-position-x: calc(50% - 180px), calc(50% + 180px);
    }

    @media screen and (max-width: 735px) {
        height: 490px;
        background-size: 150px, 154px;
        background-position-x: calc(50% - 60px), calc(50% + 60px);
        background-position-y: 20px, 100px;
        & h3 {
            text-shadow: none;
            font-size: 48px;
            line-height: 1;
            font-weight: 700;
            letter-spacing: -0.00043em;
        }

        & p {
            font-size: 19px;
            line-height: 1.4211026316;
            letter-spacing: .012em;
            margin-bottom: 14px;
        }
    }
`
export const AirPodsProPosterContent = styled.div`
    position: absolute;
    top: 265px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;

    @media screen and (max-width: 1075px) {
        top: 195px;
    }

    @media screen and (max-width: 735px) {
        top: 320px;
    }
`

export const AirPodsProPosterTitle = styled.h3`
    margin: 0;
    font-size: 120px;
    line-height: .8;
    font-weight: 600;
    letter-spacing: -0.0018em;
    color: var(--color-screen-glow);
    text-shadow: 0 2px 50px rgb(0 0 0 / 48%);
`

export const AirPodsProPosterSubtitle = styled.p`
    font-size: 21px;
    line-height: 1.381002381;
    font-weight: 400;
    letter-spacing: .011em;
    margin-top: 17px;
    margin-bottom: 210px;
    color: var(--color-screen-glow);

    & + div {
        margin: 0 auto;
    }
`