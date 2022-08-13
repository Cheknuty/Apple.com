import styled from "styled-components"

export const FooterFakeHeadWrapper = styled.div`
    color: #6e6e73;
    padding: 10px 0 0 0;
    border-bottom: 1px solid #d2d2d7;

    &[data-active="true"] {
        & p {
            color: #000;

            & svg {
                transform: rotate(45deg);
                color: #000;
            }
        }

        & ul {
            transform: scaleY(100%);
            top: 0;
            position: relative;
            opacity: 1;
            
            pointer-events: all;
        }
    }
`

export const FooterFakeList = styled.ul`
    list-style: none;
    margin: 0;
    position: absolute;
    opacity: 0;
    transform: scaleY(0%);
    top: -30px;
    transform-origin: top center;
    transition: all 0.5s ease;
    transition: opacity 0.1 ease;
    padding: 5px 0 16px 0;
    pointer-events: none;
`

export const FooterFakeHeadDesc = styled.p`
    margin: 0;
    padding-bottom: 10px;
    margin-bottom: 5px;
    position: relative;
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
