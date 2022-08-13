import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ContainerMini } from "../containerMini/containerMini.component";
import { FooterFakePanel } from "../footerFakePanel/footerFakePanel.component";
import { FooterItem } from "../footerItem/footerItem.component";
import { FooterPrimaryColumn, FooterPrimaryContainer, FooterPrimaryContent, FooterPrimaryCTA, FooterPrimaryCTABottom, FooterPrimaryCTABottomDesc, FooterPrimaryCTABottomDescSpan, FooterPrimaryCTATop, FooterPrimaryItem, FooterPrimaryItemH, FooterPrimaryList, FooterPrimaryWrapper } from "./footerPrimary.style";

export function FooterPrimary() {
    const textObject = useSelector(state => state.footer.textSource)

    return (
        <FooterPrimaryWrapper>
            <FooterPrimaryContainer>
                <FooterPrimaryContent>
                    <FooterPrimaryColumn>
                        <FooterPrimaryList>
                            <FooterPrimaryItemH>Shop and Learn</FooterPrimaryItemH>
                            {
                                textObject["Shop and Learn"].map((item, idx) => <FooterItem key={idx} title={item.title} href={item.href} type="real" />)
                            }
                        </FooterPrimaryList>
                    </FooterPrimaryColumn>

                    <FooterPrimaryColumn>
                        <FooterPrimaryList>
                            <FooterPrimaryItemH>Services</FooterPrimaryItemH>
                            {
                                textObject.Services.map((item, idx) => <FooterItem key={idx} title={item.title} href={item.href} type="real" />)
                            }
                        </FooterPrimaryList>
                        <FooterPrimaryList>
                            <FooterPrimaryItemH>Account</FooterPrimaryItemH>
                            {
                                textObject.Account.map((item, idx) => <FooterItem key={idx} title={item.title} href={item.href} type="real" />)
                            }
                        </FooterPrimaryList>
                    </FooterPrimaryColumn>

                    <FooterPrimaryColumn>
                        <FooterPrimaryList>
                            <FooterPrimaryItemH>Apple Store</FooterPrimaryItemH>
                            {
                                textObject["Apple Store"].map((item, idx) => <FooterItem key={idx} title={item.title} href={item.href} type="real" />)
                            }
                        </FooterPrimaryList>
                    </FooterPrimaryColumn>


                    <FooterPrimaryColumn>
                        <FooterPrimaryList>
                            <FooterPrimaryItemH>For Busines</FooterPrimaryItemH>
                            {
                                textObject["For Busines"].map((item, idx) => <FooterItem key={idx} title={item.title} href={item.href} type="real" />)
                            }
                        </FooterPrimaryList>
                        <FooterPrimaryList>
                            <FooterPrimaryItemH>For Education</FooterPrimaryItemH>
                            {
                                textObject["For Education"].map((item, idx) => <FooterItem key={idx} title={item.title} href={item.href} type="real" />)
                            }
                        </FooterPrimaryList>
                        <FooterPrimaryList>
                            <FooterPrimaryItemH>For Healthcare</FooterPrimaryItemH>
                            {
                                textObject["For Healthcare"].map((item, idx) => <FooterItem key={idx} title={item.title} href={item.href} type="real" />)
                            }
                        </FooterPrimaryList>
                        <FooterPrimaryList>
                            <FooterPrimaryItemH>For Government</FooterPrimaryItemH>
                            {
                                textObject["For Government"].map((item, idx) => <FooterItem key={idx} title={item.title} href={item.href} type="real" />)
                            }
                        </FooterPrimaryList>
                    </FooterPrimaryColumn>

                    <FooterPrimaryColumn>
                        <FooterPrimaryList>
                            <FooterPrimaryItemH>Apple Values</FooterPrimaryItemH>
                            {
                                textObject["Apple Values"].map((item, idx) => <FooterItem key={idx} title={item.title} href={item.href} type="real" />)
                            }
                        </FooterPrimaryList>
                        <FooterPrimaryList>
                            <FooterPrimaryItemH>About Apple</FooterPrimaryItemH>
                            {
                                textObject["About Apple"].map((item, idx) => <FooterItem key={idx} title={item.title} href={item.href} type="real" />)
                            }
                        </FooterPrimaryList>
                    </FooterPrimaryColumn>


                </FooterPrimaryContent>
                <FooterFakePanel />
                <FooterPrimaryCTA>
                    <FooterPrimaryCTATop>More ways to shop: <Link to={"/"}>Find an Apple Store</Link> or <Link to={"/"}>other retailer</Link> near you. Or call 1-800-MY-APPLE.</FooterPrimaryCTATop>
                    <FooterPrimaryCTABottom>
                        <FooterPrimaryCTABottomDesc>
                            Copyright © 2022 Apple Inc. All rights reserved.
                            <FooterPrimaryCTABottomDescSpan>Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map </FooterPrimaryCTABottomDescSpan>
                        </FooterPrimaryCTABottomDesc>
                        <FooterPrimaryCTABottomDescSpan>United States</FooterPrimaryCTABottomDescSpan>
                    </FooterPrimaryCTABottom>
                </FooterPrimaryCTA>
            </FooterPrimaryContainer>
        </FooterPrimaryWrapper>
    )
}