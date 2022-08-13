import styled from "styled-components"


export const ProductListSectionWrapper = styled.section`
    margin-bottom: 10px;
    @media screen and (max-width: 1070px) {
        & ul {
            grid-auto-rows: minmax(515px, auto);
        }

        & li {
            background-size: cover;
            padding-top: 42px;
        }

        & li:last-child {
            background-size: 266px 340px;
        }

        & h3 {
            font-size: 32px;
            line-height: 1.125;
            letter-spacing: .002em;
        }

        & p {
            font-size: 19px;
            line-height: 1.21053;
            letter-spacing: .012em;
        }
    }

    @media screen and (max-width: 735px) {
        & ul {
            grid-row-gap: 13px;
            grid-column-gap: 0;
            grid-template-columns: 100%;
        }
    }
`

export const ProductListSectionList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(580px, auto);
    grid-gap: 13px;
    text-align: center;
`

export const ProductListSectionItem = styled.li`
    padding-top: 53px;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    background-color: var(--color-primary);

    &:nth-child(1) {
        background-image: url("https://www.apple.com/v/home/aq/images/promos/iphone-13-pro/promo_iphone13pro_avail__beadms4ldidu_large.jpg");

        & img {
            margin-left: 26px;
        }
    }

    &:nth-child(2) {
        background-image: url("https://www.apple.com/v/home/aq/images/promos/macbook-pro-13/promo_mbp13__buwssod6c8vm_large.jpg");
    }

    &:nth-child(3) {
        background-image: url("https://www.apple.com/v/home/aq/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large.jpg");

        & img {
            margin-bottom: 4px;
        }
    }

    &:nth-child(4) {
        background-image: url("https://www.apple.com/v/home/aq/images/promos/ipad-air/promo_ipadair_avail__ferd4bfpcdm6_large.jpg");

        & img {
            margin-bottom: 4px;
        }
    }

    &:nth-child(5) {
        background-image: url("https://www.apple.com/v/home/aq/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg");

        & img {
            margin-bottom: 4px;
        }
    }

    &:nth-child(6) {
        background-image: url("https://www.apple.com/v/home/aq/images/promos/airpods-pro/tile__cauwwcyyn9hy_large.jpg");
        background-color: black;
    }

    &:nth-child(2n) h3, &:nth-child(2n) p {
        color: var(--color-screen-glow);
    }

    & a {
        color: var(--color-satin-deep-black);
        text-decoration: none;
        height: 100%;
        display: block;
    }
`

export const ProductListSectionItemTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0em;
`

export const ProductListSectionItemSubtitle = styled.p`
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 21px;
    line-height: 1.2381;
    font-weight: 400;
    letter-spacing: .016em;

    & + div a {
        color: var(--color-royal-navy-blue);
        display: inline-block;
    }
`

export const ProductListSectionItemImg = styled.img`
    & + div a {
        color: var(--color-royal-navy-blue);
        display: inline-block;
    }
    
`