import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../../component/brandLogo';
import { Button } from '../../component/button';
import { Marginer } from '../../component/marginer';
import TopSectionBackgroundImg from '../../images/landing-page.jpg'
import TheBestSpecialistImg from '../../images/Work only with the best.png'

const TopSectionContainer = styled.div`
width: 1500px;
height:680px;
background: url(${TopSectionBackgroundImg});
background-position:0 -150px ;
background-size:cover;
`;

const BackgroundFilter = styled.div`
width:1500px;
height:100%;
background-color: rgba(38,70,83,0.8);
display: flex;
flex-direction:column;
`;

const TopSectionInnerContainer = styled.div`
width: 100%;
height:100%;
display:flex;
align-items:center;
justify-content:space-evenly;
`;

const StandoutImage = styled.div`
width:44em;
height:34em;
    img{
        width:100%;
        height:100%
    }
`;

const LogoContainer = styled.div`
display:flex;
align-items:flex-start;
flex-direction:column;
`;

const SloganText = styled.h3`
margin:0;
line-height:1.4;
color:#fff;
font-weight:500;
font-size:37px;
`;

export function TopSection(props) {
    const {children} = props;
    
    return (
        <div>
            <TopSectionContainer>
                <BackgroundFilter>
                    {children}
                    <TopSectionInnerContainer>
                        <LogoContainer>
                            <BrandLogo logoSize={60} textSize={50}/>
                            <Marginer direction="vertical" margin={8}/>
                            <SloganText>Find the right Expert...</SloganText>
                            <SloganText>For the job</SloganText>
                            <Marginer direction="vertical" margin={20}/>
                            <Button>Join Now</Button>
                        </LogoContainer>
                        <StandoutImage>
                            <img src={TheBestSpecialistImg} alt="image is not displayed"/>
                        </StandoutImage>
                    </TopSectionInnerContainer>
                </BackgroundFilter>
            </TopSectionContainer>      
        </div>
    );
}
