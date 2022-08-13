import { LinkBoxBig } from "../linkBoxBig/linkBoxBig.component"
import { AirPods2ndPosterContent, AirPods2ndPosterDesc, AirPods2ndPosterSubtitle, AirPods2ndPosterTitle, AirPods2ndPosterWrapper } from "./airPods2nd.style"


export const AirPods2ndPoster = () => {
    return (
        <AirPods2ndPosterWrapper>
            <AirPods2ndPosterContent>
                <AirPods2ndPosterTitle>AirPods</AirPods2ndPosterTitle>
                <AirPods2ndPosterSubtitle>2nd generation</AirPods2ndPosterSubtitle>
                <AirPods2ndPosterDesc>$129</AirPods2ndPosterDesc>
                <LinkBoxBig text1="Buy" text2="Learn more" link1="/airpods" link2="/airpods" color="blue" />
            </AirPods2ndPosterContent>
        </AirPods2ndPosterWrapper>
    )
}