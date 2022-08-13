import styled from "styled-components";
import "../../assets/css/variables.css";
export const LinkBoxWrapper = styled.div`
    & a {
        font-size: 21px;
        line-height: 1.381;
        font-weight: 400;
        color: var(--color-royal-navy-blue);
        text-decoration: none;
        background-image: none;
        display: inline-block;
        height: auto;
        margin: 0;

        &:hover {
            text-decoration: underline;
        }

        &:after {
            content: ">";
            display: inline-block;
            width: 10px;
            height: 29px;
            margin-left: 6px;
        }

        &:last-child {
            margin-left: 35px;
        }   
    }

    @media screen and (max-width: 1070px) {
        & a {
            font-size: 19px;
            line-height: 1.21053;
        }
    }
`

export const LinkBoxButton = styled.button`
    font-size: 21px;
    line-height: 1.381;
    font-weight: 400;
    color: var(--color-royal-navy-blue);
    text-decoration: none;
    background-image: none;
    display: inline-block;
    height: auto;
    margin: 0;
    background-color: transparent;
    border: none;

    &:hover {
        text-decoration: underline;
    }

    &:after {
        content: ">";
        display: inline-block;
        width: 10px;
        height: 29px;
        margin-left: 6px;
    }

    &:last-child {
        margin-left: 35px;
    }   


    @media screen and (max-width: 1070px) {
        & {
            font-size: 19px;
            line-height: 1.21053;
        }
    }
`