import React from "react"
import {InnerPageContainer, PageContainer} from "../../component/pageContainer/index.jsx"
import { TopSection } from "./TopSection.jsx"
import {Navbar} from "../../component/navbar/index.jsx"
import styled from "styled-components"
import { deviceSize } from "../../component/responsive/index.jsx"
import {Services} from "./Services.jsx"
import SpecialistAd from "../../component/specialistAd/index.jsx"
import { Marginer } from "../../component/marginer/index.jsx"
import Footer from "../../component/footer/index.jsx"


const ContentContainer = styled.div`
width:100%;
max-width:${deviceSize.laptop}px;
display: flex;
flex-direction: column;
align-items:flex-start;
padding:1em;
`;

 export function HomePage(props){
    return<>
        <PageContainer>
            <TopSection>
                <Navbar useTransparent/>
            </TopSection>
            <InnerPageContainer>
            <Marginer direction="vertical" margin="3em"/>
                <ContentContainer>
                    <Services/>
                </ContentContainer>
                <Marginer direction="vertical" margin="5em"/>
                <SpecialistAd/>
                <Marginer direction="vertical" margin="5em"/>
            </InnerPageContainer>
            <Footer/>
        </PageContainer>
    </>
    
}