import { Link } from "react-router-dom"
import { FreeAppleMusicSectionTitle, FreeAppleMusicSectionWrapper } from "./freeAppleMusicSection.style"


export const FreeAppleMusicSection = () => {
    return (
        <FreeAppleMusicSectionWrapper>
            <FreeAppleMusicSectionTitle>Get 6 months of Apple Music free with your AirPods.*  <Link to={"/"}> Learn more {">"}</Link></FreeAppleMusicSectionTitle>
        </FreeAppleMusicSectionWrapper>
    )
}