import vidMp4Large from "../../assets/videos/large.mp4"
import vidWebmLarge from "../../assets/videos/large.webm"
import vidMp4Small from "../../assets/videos/small.mp4"
import vidWebmSmall from "../../assets/videos/small.webm"

import { useRef } from "react"
import { LinkBoxBig } from "../linkBoxBig/linkBoxBig.component"
import { VideoControl } from "../videoControl/videoControl.component"
import {
    AirPodsPosterContent,
    AirPodsPosterDesc,
    AirPodsPosterSubtitle,
    AirPodsPosterTitle,
    AirPodsPosterVideo,
    AirPodsPosterVideoSource,
    AirPodsPosterWrapper
} from "./airPodsPoster.style"


export const AirPodsPoster = () => {
    const videoTargetLarge = useRef()
    const videoTargetSmall = useRef()

    const videoPlay = () => {
        videoTargetSmall.current.play()
        videoTargetLarge.current.play()
    }
    const videoPause = () => {
        videoTargetSmall.current.pause() 
        videoTargetLarge.current.pause() 
    }
    
    return (
        <AirPodsPosterWrapper>
            <AirPodsPosterVideo ref={videoTargetLarge} preload="auto" loop>
                <AirPodsPosterVideoSource src={vidWebmLarge} type="video/webm" />
                <AirPodsPosterVideoSource src={vidMp4Large} type="video/mp4" />
            </AirPodsPosterVideo>
            <AirPodsPosterVideo ref={videoTargetSmall} preload="auto" loop>
                <AirPodsPosterVideoSource src={vidWebmSmall} type="video/webm" />
                <AirPodsPosterVideoSource src={vidMp4Small} type="video/mp4" />
            </AirPodsPosterVideo>
            <AirPodsPosterContent>
                <AirPodsPosterTitle>AirPods</AirPodsPosterTitle>
                <AirPodsPosterSubtitle>3rd generation</AirPodsPosterSubtitle>
                <AirPodsPosterDesc>$179</AirPodsPosterDesc>
                <LinkBoxBig text1="Buy" text2="Learn more" link1="/airpods" link2="/airpods" color="white" />
            </AirPodsPosterContent>
            <VideoControl videoPlay={videoPlay} videoPause={videoPause}/>
        </AirPodsPosterWrapper>
    )
}