import React from "react"
import {InnerPageContainer, PageContainer} from "../../component/pageContainer/index.jsx"
import { TopSection } from "./TopSection.jsx"
import {Navbar} from "../../component/navbar/index.jsx"
import styled from "styled-components"
import { deviceSize } from "../../component/responsive/index.jsx"
import {Services} from "./Services.jsx"


const ContentContainer = styled.div`
width:100%;
max-width:${deviceSize.laptop}px;
display: flex;
flex-direction: column;
align-items:flex-start;
`;

 export function HomePage(props){
    return<>
        <PageContainer>
            <TopSection>
                <Navbar></Navbar>
            </TopSection>
            <InnerPageContainer>
                <ContentContainer>
                    <Services/>
                </ContentContainer>
            </InnerPageContainer>
        </PageContainer>
    </>
    
}