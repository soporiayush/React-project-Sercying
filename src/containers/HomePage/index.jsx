import React from "react"
import {InnerPageContainer, PageContainer} from "../../component/pageContainer/index.jsx"
import { TopSection } from "./TopSection.jsx"
import {Navbar} from "../../component/navbar/index.jsx"
import styled from "styled-components"
import { deviceSize } from "../../component/responsive/index.jsx"
import ServiceCard from "../../component/serviceCard/index.jsx"

const Title = styled.h1`
font-weight: 900;
color:#000;
`;

const ContentContainer = styled.div`
width:100%;
max-width:${deviceSize.laptop}px;
display: flex;
flex-direction: column;
align-items:flex-start;
`;

 const service = { "id": 1, "title": "I will landscape your garden", 
 "thumbnailUrl": "http://localhost:9000/garden.jpg", "rate": 34,
 "rating": 4, "specialist": { "id": 1, "fullName": "Mark brone" }}
export function HomePage(props){
    return<>
        <PageContainer>
            <TopSection>
                <Navbar></Navbar>
            </TopSection>
            <InnerPageContainer>
                <ContentContainer>
                    <Title>Most Used Services & More</Title>
                    <ServiceCard {...service}/>
                </ContentContainer>
            </InnerPageContainer>
        </PageContainer>
    </>
    
}