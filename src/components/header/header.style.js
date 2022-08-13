import "../../assets/css/variables.css"
import styled  from "styled-components"
export const HeaderWrapper = styled.header`
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    width: 100%;
    height: 44px;
    z-index: 200;
    backdrop-filter: saturate(180%) blur(20px);
    transition: all 0.7s ease;
`

export const HeaderNav = styled.nav`
    height: 44px;
`

export const HeaderNavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + div  {
        transform: scaleY(0);
        opacity: 100%;
    }

    & li:first-child {
        display: none;
    }

    @media screen and (max-width: 830px) {
        & li:not(:nth-child(2)){
            display: none;
        }

        & li:last-child,  & li:first-child {
            display: block;
        }
    }
`


export const HeaderNavItem = styled.li`
    height: 44px;
    width: auto;

    &:last-child {
        width: 20px;
    }

    & a {
        color: var(--color-screen-glow);
        text-decoration: none;
        font-size: 12px;
        line-height: 3.66667;
        font-weight: 400;
        letter-spacing: 0.08em;
        padding: 0 5px;
        color: var(--color-screen-glow);

        &:hover {
            color: var(--color-white);
        }
    }

    &:nth-child(2) a {
        background-image: url("https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg");
        width: 30px;
        display: block;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }

    &:nth-child(13) button {
        background-image: url("https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg");
        background-position-y: 0;
        width: 13px;
    }

    &:nth-child(14) button {
        background-image: url("https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg");
    }
`

export const HeaderNavItemButton = styled.button`
    background: transparent;
    border: none;
    display: block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0;
`