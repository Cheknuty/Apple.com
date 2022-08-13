import styled from "styled-components";


export const AirPodsMaxPosterWrapper = styled.li`
    width: 100%;
    height: 746px;
    border-radius: 18px;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    text-align: center;
`

export const AirPodsMaxPosterHero = styled.img`
    position: absolute;
    z-index: 4;
    left: 50%;
    transform: translateX(-50%);
    width: 540px;
    top: -230px;
`

export const AirPodsMaxPosterContent = styled.div`
    position: absolute;
    left: 50%;
    top: 260px;
    transform: translateX(-50%);
    z-index: 2;
`

export const AirPodsMaxPosterTitle = styled.img`
    margin-bottom: 17px;
    display: block;
    max-width: 1120px;
`

export const AirPodsMaxPosterSubtitle = styled.p`
    font-size: 21px;
    line-height: 1.381002381;
    letter-spacing: .011em;
    color: var(--color-satin-deep-black);
    margin-top: 0;
    margin-bottom: 200px;

    & + div {
        margin: 0 auto;
    }
`