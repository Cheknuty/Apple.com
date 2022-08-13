import { SpecSliderButton, SpecSliderControl, SpecSliderFakeContent, SpecSliderFakeDesc, SpecSliderFakeTitle, SpecSliderItem, SpecSliderItemOpenButton, SpecSliderList, SpecSliderRealContent, SpecSliderRealTitle, SpecSliderTitle, SpecSliderWrapper } from "./specSlider.style"
import { BsPlusLg } from "react-icons/bs"
import { BiChevronLeft } from "react-icons/bi"
import { BiChevronRight } from "react-icons/bi"
import { useRef } from "react"

export const SpecSlider = () => {
    const item = useRef()

    const itemToggle = () => {
        const target = item.current
        target.dataset.active === "true" ? target.setAttribute("data-active", "false") : target.setAttribute("data-active", "true")
    }
    return (
        <SpecSliderWrapper>
            <SpecSliderTitle>A magical connection to your devices.</SpecSliderTitle>
            <SpecSliderList>
                
            </SpecSliderList>

            <SpecSliderControl>
                <SpecSliderButton>
                    <BiChevronLeft fontSize="22px" />
                </SpecSliderButton>
                <SpecSliderButton>
                    <BiChevronRight fontSize="22px" />
                </SpecSliderButton>
            </SpecSliderControl>
        </SpecSliderWrapper>
    )
}