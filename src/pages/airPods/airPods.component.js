import { ContainerBig } from "../../components/containerBig/containerBig.component"
import { FooterPrimary } from "../../components/footerPrimary/footerPrimary.component"
import { Header } from "../../components/header/header.component"
import { AirPodsProductions } from "../../modules/airPodsProductions/airPodsProductions.component"
import { AirPodsSection } from "../../modules/airPodsSection/airPodsSection.component"
import { FreeAppleMusicSection } from "../../modules/freeAppleMusicSection/freeAppleMusicSection.component"
import { SpecSlider } from "../../modules/specSlider/specSlider.component"
import { AirPodsContainer, AirPodsWrapper } from "./airPods.style"


export const AirPods = () => {
    return (
        <AirPodsWrapper>
            <Header />
            <AirPodsContainer>
                <AirPodsSection />
            </AirPodsContainer>
            <FreeAppleMusicSection />
            <AirPodsContainer>
                <AirPodsProductions />
            </AirPodsContainer>
            {/* <SpecSlider /> */}
            <ContainerBig>
                <FooterPrimary />
            </ContainerBig>
        </AirPodsWrapper>
    )
}