import { AirPodsProductionsList, AirPodsProductionsSection } from "./airPodsProductions.style"
import { AirPodsPoster } from "../../components/airPodsPoster/airPodsPoster.component"
import { AirPodsProPoster } from "../../components/airPodsProPoster/airPodsProPoster.component"
import { AirPodsMaxPoster } from "../../components/airPodsMaxPoster/airPodsMax.component"
import { AirPods2ndPoster } from "../../components/airPods2ndPoster/airPods2ndPoster.component"

export const AirPodsProductions = () => {
    return (
        <AirPodsProductionsSection>
            <AirPodsProductionsList>
                <AirPodsPoster />
                <AirPodsProPoster />
                <AirPodsMaxPoster />
                <AirPods2ndPoster />
            </AirPodsProductionsList>
        </AirPodsProductionsSection>
    )
}