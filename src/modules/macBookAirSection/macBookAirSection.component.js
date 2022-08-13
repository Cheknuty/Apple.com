import { Link } from "react-router-dom";
import { ContainerMini } from "../../components/containerMini/containerMini.component";
import { LinkBox } from "../../components/linkBox/linkBox.component";
import { MacBookAirSectionBox, MacBookAirSectionSubtitle, MacBookAirSectionTitle, MacBookAirSectionWrapper } from "./macBookAirSection.style";


export function MacBookAirSection() {
    return(
        <MacBookAirSectionWrapper>
            <Link to={"/mac-book-air-m2"}>
                <ContainerMini>
                    <MacBookAirSectionBox>
                        <MacBookAirSectionTitle>MacBook Air</MacBookAirSectionTitle>
                        <MacBookAirSectionSubtitle src="https://www.apple.com/v/home/aq/images/logos/macbook-air/logo_hero_macbookair__edl9uovq56wm_large.png" />
                        <LinkBox link1={"/mac-book-air-m2"} text1="Learn more" link2={"/shop/buy-mac/macbook-air/with-m2-chip"} text2="Buy" />
                    </MacBookAirSectionBox>
                </ContainerMini>
            </Link>
        </MacBookAirSectionWrapper>
    )
}