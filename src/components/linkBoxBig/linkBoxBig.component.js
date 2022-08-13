import { Link } from "react-router-dom"
import { LinkBoxBigWrapper } from "./linkBoxBig.style"


export const LinkBoxBig = ({color, text1, text2,  link1, link2}) => {
    return (
        <LinkBoxBigWrapper data-color={color}>
            {
                color == "blue" &&
                <>
                <Link to={link1}>{text1}</Link>
                <Link to={link2}>{text2}</Link>
                </>
            }
            {
                color == "white" &&
                <>
                <Link to={link1}>{text1}</Link>
                <Link to={link2}>{text2}</Link>
                </>
            }
        </LinkBoxBigWrapper>
    )
}