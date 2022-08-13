import { Header } from "../../components/header/header.component";
import React from "react";
import { HelpSection } from "../../modules/helpSection/helpSection.component";
import { ContainerBig } from "../../components/containerBig/containerBig.component"
import { MacBookAirSection } from "../../modules/macBookAirSection/macBookAirSection.component";
import { IPhone13Section } from "../../modules/iPhone13Section/iPhone13Section.component";
import { ShopSection } from "../../modules/shopSection/shopSection.component";
import { AppleWrapper } from "./apple.style";
import { ProductListSection } from "../../modules/productListSection/productListSection.component";
import { Slider } from "../../modules/slider/slider.component";
import { TextContent } from "../../modules/textContent/textContent.component";
import { FooterPrimary } from "../../components/footerPrimary/footerPrimary.component";

export function Apple() {
    return(
        <AppleWrapper>
            <Header />
            <ContainerBig>
                <HelpSection />
                <MacBookAirSection />
                <IPhone13Section />
                <ShopSection />
                <ProductListSection />
                <Slider />
                <TextContent />
                <FooterPrimary />
            </ContainerBig>
           
        </AppleWrapper>
    )
}