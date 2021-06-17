import React from 'react';
import Footer from '../../component/footer';
import { Navbar } from '../../component/navbar';
import { InnerPageContainer, PageContainer } from '../../component/pageContainer';
import {AccountBox} from '../../component/accountBox'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyledInnerContainer = styled(InnerPageContainer)`
margin-top:3em;
margin-bottom:2em;
`;

function CustomerAccessPage(props) {
    
    const {action} = useParams()
    console.log("action:",action)
    return (
        <PageContainer>
            <Navbar/>
            <StyledInnerContainer>
                <AccountBox initialActive={action}/>
            </StyledInnerContainer>
            <Footer/>
        </PageContainer>
    );
}

export default CustomerAccessPage;