import { useRef } from "react"
import { useSelector } from "react-redux"
import { FooterItem } from "../footerItem/footerItem.component"
import { FooterFakeHeadDesc, FooterFakeHeadWrapper, FooterFakeList } from "./footerFakeHead.style"
import {AiOutlinePlus} from "react-icons/ai"

export function FooterFakeHead({ title }) {
    const textObject = useSelector(state => state.footer.textSource)
    const head = useRef()

    function toggleDropdown() {
        const target = head.current
        target.dataset.active === "true" ? target.setAttribute("data-active", "false") : target.setAttribute("data-active", "true")
    }

    return (
        <FooterFakeHeadWrapper data-active="false" ref={head} onClick={toggleDropdown}>
            <FooterFakeHeadDesc>{title} <AiOutlinePlus color="#6e6e73" fontSize={12} /></FooterFakeHeadDesc>
            <FooterFakeList>
                {
                    textObject[title].map((item, idx) => <FooterItem key={idx} title={item.title} href={item.href} type="fake" />)
                }
            </FooterFakeList>
        </FooterFakeHeadWrapper>
    )
}