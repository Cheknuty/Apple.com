import { SliderItemAboutFilm, SliderItemButton, SliderItemDesc, SliderItemFace, SliderItemGenre, SliderItemImg, SliderItemText, SliderItemWrapper } from "./sliderItem.style"


export const SliderItem = ({src, genre, desc, id,  active}) => {
    return (
        <SliderItemWrapper data-active={active} id={id}>
            <SliderItemImg src={src.max}/>
            <SliderItemImg src={src.middleMax}/>
            <SliderItemImg src={src.middleMin}/>
            <SliderItemImg src={src.min}/>
            {
                src.logo ? <SliderItemImg src={src.logo}/> : <span></span>
            }
            {
                src.title ?<SliderItemImg src={src.title}/> : <span></span>
            }
            <SliderItemText>
                <SliderItemButton href="/to">Stream now</SliderItemButton>
                <SliderItemDesc>
                    <SliderItemGenre>{genre}</SliderItemGenre>
                    <SliderItemAboutFilm>{desc}</SliderItemAboutFilm>
                </SliderItemDesc>
            </SliderItemText>
            <SliderItemFace></SliderItemFace>
        </SliderItemWrapper>
    )
}