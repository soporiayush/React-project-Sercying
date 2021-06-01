import React from "react"
import {PageContainer} from "../../component/pageContainer/index.jsx"
import { TopSection } from "./TopSection.jsx"
import {Navbar} from "../../component/navbar/index.jsx"

export function HomePage(props){
    return<>
        <PageContainer>
            <TopSection>
                <Navbar></Navbar>
            </TopSection>
        </PageContainer>
    </>
    
}