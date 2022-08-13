import { ContainerBigWrapper } from "../containerBig/containerBig.style";
export function ContainerBig({children}) {
    return(
        <ContainerBigWrapper>
            {children}
        </ContainerBigWrapper>
    )
}