import { Link } from "react-router-dom";
import { FooterItemFakeWrapper, FooterItemWrapper } from "./footerItem.style";



export function FooterItem({ title, href, type }) {
    return (
        <>
            {
                type === "real" && <FooterItemWrapper><Link to={href}>{title}</Link></FooterItemWrapper>
            }
            {
                type === "fake" &&
                <FooterItemFakeWrapper><Link to={href}>{title}</Link></FooterItemFakeWrapper>
            }
        </>
    )
}