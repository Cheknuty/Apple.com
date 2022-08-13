import { Link } from "react-router-dom"
import { BurgerMenuItem, BurgerMenuList, BurgerMenuSearchInput, BurgerMenuSearchPanel, BurgerMenuWrapper } from "./burgerMenu.style"


export const BurgerMenu = () => {
    return (
        <BurgerMenuWrapper>
            <BurgerMenuSearchPanel>
                <BurgerMenuSearchInput placeholder="Search apple.com"  />
            </BurgerMenuSearchPanel>
            <BurgerMenuList>
                <BurgerMenuItem>
                    <Link to="/">Store</Link>
                </BurgerMenuItem>
                <BurgerMenuItem>
                    <Link to="/">Mac</Link>
                </BurgerMenuItem>
                <BurgerMenuItem>
                    <Link to="/">iPad</Link>
                </BurgerMenuItem>
                <BurgerMenuItem>
                    <Link to="/">iPhone</Link>
                </BurgerMenuItem>
                <BurgerMenuItem>
                    <Link to="/">Watch</Link>
                </BurgerMenuItem>
                <BurgerMenuItem>
                    <Link to="/airpods">AirPods</Link>
                </BurgerMenuItem>
                <BurgerMenuItem>
                    <Link to="/">TV & Home</Link>
                </BurgerMenuItem>
                <BurgerMenuItem>
                    <Link to="/">Only on Apple</Link>
                </BurgerMenuItem>
                <BurgerMenuItem>
                    <Link to="/">Accessories</Link>
                </BurgerMenuItem>
                <BurgerMenuItem>
                    <Link to="/">Support</Link>
                </BurgerMenuItem>
            </BurgerMenuList>
        </BurgerMenuWrapper>
    )
}