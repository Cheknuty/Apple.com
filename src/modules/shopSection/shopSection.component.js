import { Link } from "react-router-dom";
import { ContainerMini } from "../../components/containerMini/containerMini.component";
import { ShopSectionSubtitle, ShopSectionTitle, ShopSectionWrapper } from "./shopSection.style";
import { LinkBox } from "../../components/linkBox/linkBox.component"

export function ShopSection() {
    return(
        <ShopSectionWrapper>
            <Link to={"/iphone-13/key-features/"}>
                <ContainerMini>
                    <ShopSectionTitle>Get <span>supercharged</span> for college</ShopSectionTitle>
                    <ShopSectionSubtitle>Save on Mac or iPad. Plus get a gift card to 150$</ShopSectionSubtitle>
                    <LinkBox link1={"/us-edu/shop/back-to-school"} text1="Shop now"/>
                </ContainerMini>
            </Link>
        </ShopSectionWrapper>
    )
}