import { Link } from "react-router-dom";
import { ContainerMini } from "../../components/containerMini/containerMini.component";
import { LinkBox } from "../../components/linkBox/linkBox.component";
import { IPhone13SectionBox, IPhone13SectionLinks, IPhone13SectionSubtitle, IPhone13SectionTitle, IPhone13SectionWrapper } from "./iPhone13Section.style";


export function IPhone13Section() {
    return(
        <IPhone13SectionWrapper>
            <Link to={"/iphone-13/key-features/"}>
                <ContainerMini>
                    <IPhone13SectionTitle>iPhone 13</IPhone13SectionTitle>
                    <IPhone13SectionSubtitle>Your new superpower</IPhone13SectionSubtitle>
                    <LinkBox link1={"/iphone-13/key-features/"} text1={"Learn more"} link2={"/shop/buy-iphone/iphone-13"} text2={"Buy"}/> 
                </ContainerMini>
            </Link>
        </IPhone13SectionWrapper>
    )
}