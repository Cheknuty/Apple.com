import { SpecSliderBox, SpecSliderButton, SpecSliderControl,  SpecSliderItem, SpecSliderItemDesc, SpecSliderItemTitle, SpecSliderList, SpecSliderTitle, SpecSliderWrapper } from "./specSlider.style"
import { BiChevronLeft } from "react-icons/bi"
import { BiChevronRight } from "react-icons/bi"
import { useRef } from "react"
import { SpecSliderContent } from "../specSliderContent/specSliderContent.component"
import specSliderLogic from "./specSlider.logic"

export const SpecSlider = () => {
    const list = useRef()
    return (
        <SpecSliderWrapper>
            <SpecSliderTitle>A magical connection to your devices.</SpecSliderTitle>
            <SpecSliderList ref={list}>

                <SpecSliderItem data-active="false">
                    <SpecSliderBox>
                        <SpecSliderItemTitle>One-tap setup</SpecSliderItemTitle>
                    </SpecSliderBox>
                    <SpecSliderContent title="One-tap setup" desc="Connect immediately to your iPhone or iPad." />
                </SpecSliderItem>

                <SpecSliderItem data-active="false">
                    <SpecSliderBox>
                        <SpecSliderItemTitle>Automatic switching</SpecSliderItemTitle>
                    </SpecSliderBox>
                    <SpecSliderContent
                        title="Automatic switching"
                        desc={`Automatic switching allows sound to 
                        move seamlessly between your iPhone, Apple 
                        Watch, iPad, Mac, and Apple TV.`}
                    />
                </SpecSliderItem>

                <SpecSliderItem data-active="false">
                    <SpecSliderBox>
                        <SpecSliderItemTitle>Audio Sharing</SpecSliderItemTitle>
                    </SpecSliderBox>
                    <SpecSliderContent
                        title={`Audio Sharing`}
                        desc={`Share a song, podcast, or other 
                        audio between two sets of 
                        AirPods with Audio Sharing.`}
                    />
                </SpecSliderItem>

                <SpecSliderItem data-active="false">
                    <SpecSliderBox>
                        <SpecSliderItemDesc>Hey Siri, play some workout music</SpecSliderItemDesc>
                        <SpecSliderItemTitle>Always-on Siri</SpecSliderItemTitle>
                    </SpecSliderBox>
                    <SpecSliderContent
                        title={`Always-on Siri`}
                        desc={`A simple “Hey Siri” summons your favorite 
                        personal assistant. Control your music, calls, 
                        volume, directions, and more — 
                        without lifting a finger.`}
                    />
                </SpecSliderItem>

                <SpecSliderItem data-active="false">
                    <SpecSliderBox>
                        <SpecSliderItemDesc>Skyler said: “Heading to the store. Need anything?”</SpecSliderItemDesc>
                        <SpecSliderItemTitle>Announce Notifications</SpecSliderItemTitle>
                    </SpecSliderBox>
                    <SpecSliderContent
                    title={`Announce Notifications`}
                    desc={`Siri can read your important messages or alerts as they 
                    arrive — unless you're on a call or listening to music. 
                    You can even reply to messages without opening your device.`}
                    />
                </SpecSliderItem>

            </SpecSliderList>

            <SpecSliderControl>
                <SpecSliderButton id="prev" onClick={(e) => specSliderLogic(e, list)}>
                    <BiChevronLeft pointerEvents="none" fontSize="22px" />
                </SpecSliderButton>
                <SpecSliderButton id="next" onClick={(e) => specSliderLogic(e, list)}>
                    <BiChevronRight pointerEvents="none" fontSize="22px" />
                </SpecSliderButton>
            </SpecSliderControl>
        </SpecSliderWrapper>
    )
}