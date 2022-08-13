import styled from "styled-components"

export const AirPods2ndPosterWrapper = styled.li`
    text-align: center;
    border-radius: 18px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    background-image: url("https://www.apple.com/v/airpods/r/images/overview/airpods_2ndgen_right__gahfggwvcx6q_large.png"), url("https://www.apple.com/v/airpods/r/images/overview/airpods_2ndgen_left__gjpt8k836yy6_large.png");
    background-repeat: no-repeat;
    background-position-x: calc(50% + 200px), calc(50% - 265px);
    background-position-y: 274px, 60px;
    background-size: 319px, 366px;
    width: 100%;
    height: 680px;
    color: var(--color-satin-deep-black);

    @media screen and (max-width: 1075px) {
        height: 600px;
        background-size: 283px, 318px;
        background-position-y: 215px, 50px;
        background-position-x: calc(50% + 186px), calc(50% - 223px);

        & h3 {
            font-size: 100px;
            line-height: .96;
            letter-spacing: -0.0015em;
        }

        & p:nth-child(3) {
            margin-bottom: 160px;
        }
    }

    @media screen and (max-width: 840px) {
        background-size: 234px, 262px;
        background-position-y: 245px, 85px;
        background-position-x: calc(50% + 140px), calc(50% - 228px);
    }

    @media screen and (max-width: 735px) {
        height: 490px;
        background-size: 87px, 96px;
        background-position-y: 82px, 50px;
        background-position-x: calc(50% + 48px), calc(50% - 60px);

        & h3 {
            font-size: 48px;
            line-height: 1;
            font-weight: 700;
            letter-spacing: -0.00043em;
            margin-bottom: 0;
        }


        & p:nth-child(2) {
            font-size: 19px;
            line-height: 1.4211026316;
            letter-spacing: .012em;
        }

        & p:nth-child(3) {
            font-size: 19px;
            line-height: 1.4211026316;
            letter-spacing: .012em;
            margin-bottom: 4px;
        }
    }
`

export const AirPods2ndPosterContent = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 250px;

    @media screen and (max-width: 1075px) {
        top: 200px;
    }

    @media screen and (max-width: 735px) {
        top: 320px;
    }
`

export const AirPods2ndPosterTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 17px;
    font-size: 120px;
    line-height: .8;
    font-weight: 600;
    letter-spacing: -0.0018em;
`

export const AirPods2ndPosterSubtitle = styled.p`
    margin: 0;
    font-size: 21px;
    line-height: 1.381002381;
    font-weight: 700;
    letter-spacing: .011em;
`

export const AirPods2ndPosterDesc = styled.p`
    margin-top: 0;
    margin-bottom: 200px;
    font-size: 21px;
    line-height: 1.381002381;
    letter-spacing: .011em;

    & + div {
        margin: 0 auto;
    }
`