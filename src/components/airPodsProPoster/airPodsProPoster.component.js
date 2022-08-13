import { LinkBoxBig } from "../linkBoxBig/linkBoxBig.component"
import { AirPodsProPosterContent, AirPodsProPosterSubtitle, AirPodsProPosterTitle, AirPodsProPosterWrapper } from "./airPodsProPoster.style"


export const AirPodsProPoster = () => {
    return (
        <AirPodsProPosterWrapper>
            <AirPodsProPosterContent>
                <AirPodsProPosterTitle>AirPods Pro</AirPodsProPosterTitle>
                <AirPodsProPosterSubtitle>$249</AirPodsProPosterSubtitle>
                <LinkBoxBig text1="Buy" text2="Learn more" link1="/" link2="/" color="white"/>
            </AirPodsProPosterContent>
        </AirPodsProPosterWrapper>
    )
}