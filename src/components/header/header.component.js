import { NavLink } from "react-router-dom";
import { HeaderNav, HeaderNavItem, HeaderNavItemButton, HeaderNavList, HeaderWrapper } from "./header.style";
import React, { useRef } from "react";
import { HiMenuAlt4 } from "react-icons/hi"
import { ContainerMini } from "../containerMini/containerMini.component";
import { BurgerMenu } from "../../modules/burgerMenu/burgerMenu.component";
export function Header() {
    const header = useRef()

    const headerToggler = () => {
        header.current.closest("html").setAttribute("data-active", header.current.closest("html").dataset.active === "true"? false : true)
        console.log("Click");
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
                            <NavLink to={"/"}>Store</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/"}>Mac</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/"}>iPad</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/"}>iPhone</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/"}>Watch</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/airpods"}>AirPods</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/"}>TV & Home</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/"}>Only on Apple</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/"}>Accessories</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <NavLink to={"/"}>Support</NavLink>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <HeaderNavItemButton></HeaderNavItemButton>
                        </HeaderNavItem>
                        
                        <HeaderNavItem>
                            <HeaderNavItemButton></HeaderNavItemButton>
                        </HeaderNavItem>
                        
                    </HeaderNavList>

                    <BurgerMenu click={headerToggler} />
                </HeaderNav>
            </ContainerMini>
        </HeaderWrapper>
    ) 
}

