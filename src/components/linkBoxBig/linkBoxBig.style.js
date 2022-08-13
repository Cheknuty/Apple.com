import styled from "styled-components";


export const LinkBoxBigWrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: max-content;
    

    & a {
        text-decoration: none;
        display: block;
        cursor: pointer;

        &:first-child {
            font-size: 17px;
            line-height: 1.1764805882;
            font-weight: 400;
            letter-spacing: -0.022em;
            padding: 12px 22px;
            border-radius: 980px;
        }

        &:last-child {
            font-size: 21px;
            line-height: 1.381002381;
            font-weight: 400;
            letter-spacing: .011em;
            margin-left: 18px;

            &::after {
                content: ">";
                display: inline-block;
                margin-left: 5px;
                font-size: 18px;
            }

            &:hover {
                text-decoration: underline;
            }
        }

    }

    &[data-color="blue"] {
        & a:first-child {
            background-color: #0071e3;
            color: #fff;
        }

        & a:last-child {
            color: var(--color-royal-navy-blue);
        }
    }

    &[data-color="white"] {
        & a:first-child {
            background-color: #fff;
            color: #000;
        }

        & a:last-child {
            color: #fff;
        }
    }

    @media screen and (max-width: 735px) {
            & a:first-child {
                padding: 8px 16px;
            }

            & a:last-child {
                font-size: 19px;
            }
        }

        @media screen and (max-width: 450px) {
            & a:first-child {
                padding: 7px 14px;
            }

            & a:last-child {
                font-size: 18px;
                margin-left: 10px;
            }
        }
`