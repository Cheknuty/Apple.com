import { useNavigate } from "react-router-dom";
import { LinkBoxButton, LinkBoxWrapper } from "./linkBox.style";


export function LinkBox({link1=null, link2=null, text1, text2}) {
    const nav = useNavigate()
    function clickHandel(e) {
        e.preventDefault()
        if(e.target.id === "1" && link1) {
            nav(`../${link1}`)
        }

        else if(e.target.id === "2" && link2)  {
            nav(`../${link2}`)

        }
    }

    return(
        <LinkBoxWrapper>
        {
            link1 && <LinkBoxButton id="1" onClick={clickHandel}>{text1}</LinkBoxButton>
        }
        {
            link2 && <LinkBoxButton id="2" onClick={clickHandel}>{text2}</LinkBoxButton>
        }     
        </LinkBoxWrapper>
    )
}