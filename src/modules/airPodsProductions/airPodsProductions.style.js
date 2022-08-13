import styled from "styled-components";

export const AirPodsProductionsSection = styled.section`
    max-width: 1520px;
    margin: 0 auto;
    padding: 30px 0 150px 0;

    @media screen and (max-width: 735px){
        max-width: 400px;
        width: 100%;
    }
`

export const AirPodsProductionsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
`