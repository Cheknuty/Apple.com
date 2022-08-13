import styled from "styled-components";


export const BurgerMenuWrapper = styled.div`
    width: 100%;
    padding: 0 10px;
    transform: translateY(0);
    transition: all 700ms ease;
    transform-origin: top center;
    opacity: 0%;
`

export const BurgerMenuSearchPanel = styled.form`
    width: 100%;
    border-bottom: 1px solid #424245;
    padding-bottom: 17px;
`

export const BurgerMenuSearchInput = styled.input`
    width: 100%;
    padding: 4px 10px 2px 32px;
    line-height: 2.11765em;
    background-color: #1d1d1f;
    border-radius: 8px;
    border: none;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -.022em;
    color: var(--color-screen-glow);

    &:focus {
        outline: none;
    }

    &::placeholder {
        font-size: 17px;
        line-height: 1.23536;
        font-weight: 400;
        letter-spacing: -.022em;
        color: #6e6e73;
    }
`

export const BurgerMenuList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    padding: 0 40px;
    display: grid;
    grid-template-columns: 1fr;
`

export const BurgerMenuItem = styled.li`
    height: 44px;
    & a {
        text-decoration: none;
        display: block;
        font-size: 17px;
        line-height: 1.23536;
        font-weight: 400;
        letter-spacing: -.022em;
        color: var(--color-screen-glow);
        padding-top: 14px;
    }

    &:not(:last-child) {
        border-bottom: 1px solid #424245;
    }
`