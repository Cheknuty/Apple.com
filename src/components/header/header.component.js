import { NavLink } from "react-router-dom";
import { HeaderNav, HeaderNavIcon, HeaderNavItem, HeaderNavItemButton, HeaderNavList, HeaderWrapper } from "./header.style";
import React, { useRef } from "react";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi"
import { ContainerMini } from "../containerMini/containerMini.component";
import { BurgerMenu } from "../../modules/burgerMenu/burgerMenu.component";
export function Header() {
    const header = useRef()

    const headerToggler = () => {
        header.current.closest("html").setAttribute("data-active", header.current.closest("html").dataset.active == "true"? false : true)

    }

    return(
        <HeaderWrapper ref={header} data-active="false">
            <ContainerMini>
                <HeaderNav>
                    <HeaderNavList>

                        <HeaderNavItem  onClick={headerToggler}>
                            <HeaderNavItemButton>
                                <HiMenuAlt4 color="var(--color-white)" fontSize={"20px"}/>
                            </HeaderNavItemButton>
                        </HeaderNavItem>

                        <HeaderNavItem>
                            <NavLink to={"/"}>
                            </NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/store"}>Store</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/mac"}>Mac</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/ipad"}>iPad</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/iphone"}>iPhone</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/watch"}>Watch</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/airpods"}>AirPods</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/tv-home"}>TV & Home</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/only-on-apple"}>Only on Apple</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/accessories"}>Accessories</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/support"}>Support</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <HeaderNavItemButton></HeaderNavItemButton>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <HeaderNavItemButton></HeaderNavItemButton>
                        </HeaderNavItem>
                        
                    </HeaderNavList>

                    <BurgerMenu />
                </HeaderNav>
            </ContainerMini>
        </HeaderWrapper>
    ) 
}

