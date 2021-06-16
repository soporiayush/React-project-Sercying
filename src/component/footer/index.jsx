import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
const FooterContainer = styled.div`
width:100%;
display:flex;
min-height:300px;
flex-direction:column;
justify-content:space-between;
padding: 2em 3em;
padding-bottom:0;
border-top: 0.6px solid rgb(0, 0, 0, 0.3);
`;

const TopContainer = styled.div`
width:100%;
display:flex;
margin-bottom: 1em;
`;

const ContentContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
&:not(:last-of-type){
    margin-right:3%;
}
`;

const BottomContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:70px;
border-top: 0.6px solid rgb(0, 0, 0, 0.3);
padding: 0 10px;
`;

const RightBottomContainer = styled.div`
display:flex;
`;
const LeftBottomContainer = styled.div`
display:flex;
`;

const Title = styled.h2`
margin:0;
margin-bottom:8px;
color:#000;
font-weight:600;
font-size:20px;
`;

const FLink = styled.a`
text-decoration:none;
color:#6F6F6F;
font-weight:500;
font-size:15px; 
cursor:pointer;
&:not(:last-of-type){
    margin-bottom:8px;
}
`;

const PrivacyText = styled.h6`
color:#828282;
font-size:11px;
margin:0;
margin-left:10px;
display:flex;
align-items: center;
margin-top:5px;
`;

const SocialIcon  = styled.div`
color: #8A8A8A;
font-size:20px;
&:not(:last-of-type){
    margin-right:15px;
}
`;

function Footer(props) {
    return (
        <FooterContainer>
            <TopContainer>
                <ContentContainer>
                    <Title>Categories</Title>
                    <FLink>Car repair</FLink>
                    <FLink>Carperntery</FLink>
                    <FLink>Land Scaping</FLink>
                    <FLink>Cleaning</FLink>
                    <FLink>Others</FLink>
                </ContentContainer>
                <ContentContainer>
                    <Title>Access</Title>
                    <FLink>Login</FLink>
                    <FLink>Join Us</FLink>
                    <FLink>Login as Specialist</FLink>
                    <FLink>Join as Specialist</FLink>
                </ContentContainer>
            </TopContainer>
            <BottomContainer>
                <LeftBottomContainer>
                    <BrandLogo hideLogo color="#8A8A8A" textSize={26}/>
                    <PrivacyText>All rights are reserved, 2021</PrivacyText>
                </LeftBottomContainer>
                <RightBottomContainer>
                  <SocialIcon>
                    <FacebookIcon/>
                  </SocialIcon>
                  <SocialIcon>
                    <TwitterIcon/>
                  </SocialIcon>  
                </RightBottomContainer>
            </BottomContainer>
        </FooterContainer>
    );
}

export default Footer;