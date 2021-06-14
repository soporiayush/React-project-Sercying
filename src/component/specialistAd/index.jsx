import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Marginer } from '../marginer';
import FarmingImg from '../../images/farming.png'
import { Button } from '../button';

const SpecialistAdContainer = styled.div`
width:100%;
height:500px;
display:flex;
background-color:#264653;
align-items:center;
justify-content:center;
`;

const ContentContainer = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:space-evenly;
`;

const SloganContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
`;

const Slogan  = styled.h2`
margin: 0;
font-size: 24px;
color:#fff;
font-weight:700;
line-height:1.3;
`;

const StandoutImage = styled.div`
width:35em;
height:29em;

img{
    height:100%;
    width:100%;
}
`;

function SpecialistAd(props) {
    return (
        <SpecialistAdContainer>
            <ContentContainer>
                <SloganContainer>
                    <BrandLogo logoSize={40} textSize={35}/>
                    <Marginer direction="vertical" margin="1em"/>
                    <Slogan>You're a Specialist, and you</Slogan> 
                    <Slogan>have an out</Slogan> 
                    <Slogan>Serice to offer?</Slogan> 
                    <Marginer direction="vertical" margin="1em"/>
                    <Button size={15}>Join as Specialist</Button>
                </SloganContainer>
                
                <StandoutImage>
                    <img src={FarmingImg} alt="Specialist "/>
                </StandoutImage>
            </ContentContainer>
        </SpecialistAdContainer>
            
    );
}

export default SpecialistAd;