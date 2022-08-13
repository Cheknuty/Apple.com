import { HelpSectionBox, HeplSectionBox, HeplSectionImg, HeplSectionTitle, HeplSectionWrapper } from "./helpSection.style";
import { BsArrowUpRight } from "react-icons/bs"

export function HelpSection() {
    return(
        <HeplSectionWrapper>
            <HeplSectionImg src="https://www.apple.com/v/home/aq/images/logos/unicef-relief-fund/unicef_logo_dark__ejvlglygb3ee_large.png"/>
            <HelpSectionBox>
                <HeplSectionTitle>
                    Donate to support families affected by the war in Ukraine
                </HeplSectionTitle>
                <BsArrowUpRight fontSize={"12px"} fontWeight={900} color={"var(-color-royal-navy-blue)"}/>
            </HelpSectionBox>

        </HeplSectionWrapper>
    )
}