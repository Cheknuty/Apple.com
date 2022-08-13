import { SpecSliderContentBox, SpecSliderContentButton, SpecSliderContentDesc, SpecSliderContentTitle, SpecSliderContentWrapper } from "./specSliderContent.style";
import { FaPlus } from "react-icons/fa"
import { useRef } from "react";
import specSliderLogic from "../specSlider/specSlider.logic";


export function SpecSliderContent({title, desc}) {
    const ref = useRef()
    

    return (
        <SpecSliderContentWrapper data-active="false" ref={ref}>
            <SpecSliderContentBox>
                <SpecSliderContentTitle>{title}</SpecSliderContentTitle>
                <SpecSliderContentDesc>{desc}</SpecSliderContentDesc>
            </SpecSliderContentBox>
            <SpecSliderContentButton id="info-panel" onClick={(e) => specSliderLogic(e, ref)}>
                <FaPlus color="#fff" fontSize={"18px"} pointerEvents="none" />
            </SpecSliderContentButton>
        </SpecSliderContentWrapper>
    )
}