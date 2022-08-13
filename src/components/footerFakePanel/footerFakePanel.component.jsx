import { useSelector } from "react-redux";
import { FooterFakeHead } from "../footerFakeHead/footerFakeHead.component";
import { FooterFakePanelSet, FooterFakePanelWrapper } from "./footerFakePanel.style";


export function FooterFakePanel() {
    const textObject = useSelector(state => state.footer.textSource)
    const titlesArray = Object.keys(textObject)
    return (
        <FooterFakePanelWrapper>
            <FooterFakePanelSet>
                {
                    titlesArray.map((item, idx) => <FooterFakeHead title={item} key={idx} />)
                }
            </FooterFakePanelSet>
        </FooterFakePanelWrapper>
    )
}