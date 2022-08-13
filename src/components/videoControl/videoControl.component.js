import { useRef } from "react"
import { VideoControlButton, VideoControlWrapper } from "./videoControl.style"


export const VideoControl = ({videoPlay, videoPause}) => {
    const button = useRef()
    const clickHandler = () => {
        const target = button.current
        if(target.dataset.play == "true")  {
            videoPause()
            target.setAttribute("data-play", "false")
        }

        else {
            videoPlay()
            target.setAttribute("data-play", "true")
        }
    }

    return (
        <VideoControlWrapper ref={button} data-play="false" onClick={clickHandler}>
            <VideoControlButton></VideoControlButton>
        </VideoControlWrapper>
    )
}