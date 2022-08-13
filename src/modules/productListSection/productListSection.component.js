import { Link } from "react-router-dom";
import { LinkBox } from "../../components/linkBox/linkBox.component"
import { ProductListSectionItem, ProductListSectionItemSubtitle, ProductListSectionItemImg, ProductListSectionItemTitle, ProductListSectionList, ProductListSectionWrapper } from "./productListSection.style";

export function ProductListSection() {
    return(
        <ProductListSectionWrapper>
            <ProductListSectionList>

                <ProductListSectionItem>
                    <Link to={"/iphone-13-pro"}>
                        <ProductListSectionItemTitle>iPhone 13 Pro</ProductListSectionItemTitle>
                        <ProductListSectionItemSubtitle>Oh. So. Pro.</ProductListSectionItemSubtitle>
                        <LinkBox link1={"/iphone-13-pro"} text1={"Learn more"} link2={"/us-edu/shop/buy-iphone/iphone-13-pro"} text2={"Buy"}/>
                    </Link>
                </ProductListSectionItem>

                <ProductListSectionItem>
                    <Link to={"/mac-book-pro-13"}>
                        <ProductListSectionItemTitle>MacBook Pro 13”</ProductListSectionItemTitle>
                        <ProductListSectionItemImg src="https://www.apple.com/v/home/aq/images/logos/macbook-pro-13/logo_promo_mbp13__gnmug5nsag66_large.png" />
                        <LinkBox link1={"/mac-book-pro-13"} text1={"Learn more"} link2={"/us-edu/shop/buy-mac/macbook-pro/13-inch"} text2={"Buy"}/>
                    </Link>
                </ProductListSectionItem>

                <ProductListSectionItem>
                    <Link to={"/apple-watch-series-7"}>
                        <ProductListSectionItemImg src="https://www.apple.com/v/home/aq/images/logos/watch-series-7/promo_logo_watch_lte__emrof7zzkriq_large.png" />
                        <ProductListSectionItemSubtitle>It’s our largest display yet.</ProductListSectionItemSubtitle>
                        <LinkBox link1={"/apple-watch-series-7"} text1={"Learn more"} link2={"/us-edu/shop/buy-watch/apple-watch"} text2={"Buy"}/>
                    </Link>
                </ProductListSectionItem>

                <ProductListSectionItem>
                    <Link to={"/ipad-air"}>
                        <ProductListSectionItemImg src="https://www.apple.com/v/home/aq/images/logos/ipad-air/promo_logo_ipadair__frwnnsqveeye_large.png" />
                        <ProductListSectionItemSubtitle>Light. Bright. Full of might.</ProductListSectionItemSubtitle>
                        <LinkBox link1={"/ipad-air"} text1={"Learn more"} link2={"us-edu/shop/buy-ipad/ipad-air"} text2={"Buy"}/>
                    </Link>
                </ProductListSectionItem>

                <ProductListSectionItem>
                    <Link to={"/apple-card"}>
                        <ProductListSectionItemImg src="https://www.apple.com/v/home/aq/images/logos/apple-card/logo__dcojfwkzna2q_large.png" />
                        <ProductListSectionItemSubtitle>Get up to 3% Daily Cash back with every purchase.</ProductListSectionItemSubtitle>
                        <LinkBox link1={"/apple-card"} text1={"Learn more"} link2={"/apple-card"} text2={"Apply now"}/>
                    </Link>
                </ProductListSectionItem>

                <ProductListSectionItem>
                    <Link to={"/airpods-pro"}>
                        <ProductListSectionItemTitle>AirPods Pro</ProductListSectionItemTitle>
                        <ProductListSectionItemSubtitle>Magic like you’ve never heard.</ProductListSectionItemSubtitle>
                        <LinkBox link1={"/airpods-pro"} text1={"Learn more"} link2={"/us-edu/shop/product/MLWK3AM/A/airpods-pro"} text2={"Buy"}/>
                    </Link>
                </ProductListSectionItem>

            </ProductListSectionList>
        </ProductListSectionWrapper>
    )
}