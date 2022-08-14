import { Link } from "react-router-dom"
import { BurgerMenuItem, BurgerMenuList, BurgerMenuSearchInput, BurgerMenuSearchPanel, BurgerMenuWrapper } from "./burgerMenu.style"


export const BurgerMenu = ({click}) => {
    return (
        <BurgerMenuWrapper>
            <BurgerMenuSearchPanel>
                <BurgerMenuSearchInput placeholder="Search apple.com"  />
            </BurgerMenuSearchPanel>
            <BurgerMenuList>
                <BurgerMenuItem onClick={click}>
                    <Link to="/">Store</Link>
                </BurgerMenuItem>
                <BurgerMenuItem onClick={click}>
                    <Link to="/">Mac</Link>
                </BurgerMenuItem>
                <BurgerMenuItem onClick={click}>
                    <Link to="/">iPad</Link>
                </BurgerMenuItem>
                <BurgerMenuItem onClick={click}>
                    <Link to="/">iPhone</Link>
                </BurgerMenuItem>
                <BurgerMenuItem onClick={click}>
                    <Link to="/">Watch</Link>
                </BurgerMenuItem>
                <BurgerMenuItem onClick={click}>
                    <Link to="/airpods">AirPods</Link>
                </BurgerMenuItem>
                <BurgerMenuItem onClick={click}>
                    <Link to="/">TV & Home</Link>
                </BurgerMenuItem>
                <BurgerMenuItem onClick={click}>
                    <Link to="/">Only on Apple</Link>
                </BurgerMenuItem>
                <BurgerMenuItem onClick={click}>
                    <Link to="/">Accessories</Link>
                </BurgerMenuItem>
                <BurgerMenuItem onClick={click}>
                    <Link to="/">Support</Link>
                </BurgerMenuItem>
            </BurgerMenuList>
        </BurgerMenuWrapper>
    )
}