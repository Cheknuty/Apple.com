import styled from "styled-components";


export const SpecSliderContentWrapper = styled.div`
    padding: 50px 65px 60px 45px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;

    &[data-active="true"] {
        & div {
            opacity: 1;
        }

        & button {
            transform: rotate(45deg);
        }
    }
`

export const SpecSliderContentBox = styled.div`
    color: var(--color-satin-deep-black);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    opacity: 0;
    transition: all 0.1s ease-in-out;
`

export const SpecSliderContentTitle = styled.h4`
    margin: 0;
    font-size: 24px;
    line-height: 1.1666666667;
    font-weight: 600;
    letter-spacing: .009em;
`

export const SpecSliderContentDesc = styled.p`
    margin: 0;
    margin-top: 0.8em;
    font-size: 17px;
    line-height: 1.4705882353;
    letter-spacing: -0.022em;
`

export const SpecSliderContentButton = styled.button`
    background-color: transparent;
    border: none;
    width: 37px;
    height: 37px;
    position: absolute;
    bottom: 27px;
    right: 27px;
    background-color: #000;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    & svg {
        position: relative;
        top: 1px;
    }

    @media screen and (max-width: 735px) {
        & {
            width: 25px;
            height: 25px;
            bottom: 20px;
            right: 20px;

            & svg {
                font-size: 15px;
            }
        }
    }
`