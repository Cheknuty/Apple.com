import { Link } from "react-router-dom"
import { AirPodsSectionItem, AirPodsSectionItemIcon, AirPodsSectionItemTitle, AirPodsSectionWrapper } from "./airPodsSection.style"


export const AirPodsSection = () => {
    return (
        <AirPodsSectionWrapper>
            <AirPodsSectionItem>
                <Link to={"/airpods-2nd-generation"}>
                    <AirPodsSectionItemIcon src="https://www.apple.com/v/airpods/r/images/chapternav/airpods_2gen_light__ckwbqlgv1r9e_large.svg" width="32" height="54" />
                    <AirPodsSectionItemTitle>AirPods</AirPodsSectionItemTitle>
                    <AirPodsSectionItemTitle>2nd Generation</AirPodsSectionItemTitle>
                </Link>
            </AirPodsSectionItem>
            <AirPodsSectionItem>
                <Link to={"/airpods-2nd-generation"}>
                    <AirPodsSectionItemIcon src="https://www.apple.com/v/airpods/r/images/chapternav/airpods_3gen_light__6r7zooyk4lua_large.svg" width="34" height="54" />
                    <AirPodsSectionItemTitle>AirPods</AirPodsSectionItemTitle>
                    <AirPodsSectionItemTitle>3rd Generation</AirPodsSectionItemTitle>
                </Link>
            </AirPodsSectionItem>
            <AirPodsSectionItem>
                <Link to={"/airpods-pro"}>
                    <AirPodsSectionItemIcon src="https://www.apple.com/v/airpods/r/images/chapternav/airpods_pro_light__ets5a19rt3au_large.svg" width="38" height="54" />
                    <AirPodsSectionItemTitle>AirPods Pro</AirPodsSectionItemTitle>
                </Link>
            </AirPodsSectionItem>
            <AirPodsSectionItem>
                <Link to={"/airpods-max"}>
                    <AirPodsSectionItemIcon src="https://www.apple.com/v/airpods/r/images/chapternav/airpods_max_light__cvaaddhgazqu_large.svg" width="34" height="54" />
                    <AirPodsSectionItemTitle>AirPods Max</AirPodsSectionItemTitle>
                </Link>
            </AirPodsSectionItem>
            <AirPodsSectionItem>
                <Link to={"/airpods/compare"}>
                    <AirPodsSectionItemIcon src="https://www.apple.com/v/airpods/r/images/chapternav/airpods_compare_light__cmuvdvbxj1w2_large.svg" width="45" height="54" />
                    <AirPodsSectionItemTitle>Compare</AirPodsSectionItemTitle>
                </Link>
            </AirPodsSectionItem>
            <AirPodsSectionItem>
                <Link to={"/apple-music"}>
                    <AirPodsSectionItemIcon src="https://www.apple.com/v/airpods/r/images/chapternav/apple_music_light__fexraacz3dme_large.svg" width="32" height="54" />
                    <AirPodsSectionItemTitle>Apple Music</AirPodsSectionItemTitle>
                </Link>
            </AirPodsSectionItem>
        </AirPodsSectionWrapper>
    )
}