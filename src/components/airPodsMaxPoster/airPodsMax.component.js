import { LinkBoxBig } from "../linkBoxBig/linkBoxBig.component"
import { AirPodsMaxPosterContent, AirPodsMaxPosterHero, AirPodsMaxPosterSubtitle, AirPodsMaxPosterTitle, AirPodsMaxPosterWrapper } from "./airPodsMaxPoster.style"


export const AirPodsMaxPoster = () => {
    return (
        <AirPodsMaxPosterWrapper>
            <AirPodsMaxPosterContent>
                <AirPodsMaxPosterHero src="https://www.apple.com/v/airpods/r/images/overview/airpods_max__f265q4g4ddym_large_2x.png" />
                <AirPodsMaxPosterTitle src="https://www.apple.com/v/airpods/r/images/overview/airpods_max_logo__bdgdixidcqcy_large_2x.jpg" width={"1112px"} />
                <AirPodsMaxPosterSubtitle>$549</AirPodsMaxPosterSubtitle>
                <LinkBoxBig text1="Buy" text2="Learn more" link1="/" link2="/" color="blue" />
            </AirPodsMaxPosterContent>
        </AirPodsMaxPosterWrapper>
    )
}