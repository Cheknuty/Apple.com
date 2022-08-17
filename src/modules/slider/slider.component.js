import { useRef } from "react"
import sliderLogic from "./slider.logic";
import { SliderItem } from "../sliderItem/sliderItem.component"
import { SliderBody, SliderControl, SliderControlButton, SliderList, SliderSideButton, SliderWrapper } from "./slider.style"
import { useSelector } from "react-redux";


export const Slider = () => {
  const slider = useRef()
  const sliderControl = useRef()
  const imgSource = useSelector(state => state.slider.imgSource)
  const textSource = useSelector(state => state.slider.textSource)
  return (
    <SliderWrapper id="slider" onTouchStart={(e) => sliderLogic("swipeStart", slider, sliderControl, e)} onTouchMove={(e) => sliderLogic("swipeMove", slider, sliderControl, e)} onTouchEnd={(e) => sliderLogic("swipeEnd", slider, sliderControl, e)}>

      <SliderBody>
        <SliderSideButton onClick={() => sliderLogic("prev", slider, sliderControl, null)}></SliderSideButton>
        <SliderList ref={slider}>
          {
            imgSource.map((src, idx) =>
              idx === 0 ? <SliderItem genre={textSource[idx]["genre"]} active="true" id={idx} desc={textSource[idx]["aboutFilm"]} key={idx} src={src} />
              : <SliderItem genre={textSource[idx]["genre"]} id={idx} active="false" desc={textSource[idx]["aboutFilm"]} key={idx} src={src} />)
          }
        </SliderList>
        <SliderSideButton onClick={() => sliderLogic("next", slider, sliderControl, null)}></SliderSideButton>
      </SliderBody>

      <SliderControl onClick={(e) => sliderLogic("marker", slider, sliderControl, e)} ref={sliderControl}>
        <SliderControlButton id="1" data-active="true"></SliderControlButton>
        <SliderControlButton id="2" data-active="false"></SliderControlButton>
        <SliderControlButton id="3" data-active="false"></SliderControlButton>
        <SliderControlButton id="4" data-active="false"></SliderControlButton>
        <SliderControlButton id="5" data-active="false"></SliderControlButton>
        <SliderControlButton id="6" data-active="false"></SliderControlButton>
        <SliderControlButton id="7" data-active="false"></SliderControlButton>
        <SliderControlButton id="8" data-active="false"></SliderControlButton>
        <SliderControlButton id="9" data-active="false"></SliderControlButton>
        <SliderControlButton id="10" data-active="false"></SliderControlButton>
        <SliderControlButton id="11" data-active="false"></SliderControlButton>
      </SliderControl>

    </SliderWrapper>
  )
}