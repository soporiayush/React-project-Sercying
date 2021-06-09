import StarRateIcon from '@material-ui/icons/StarRate';
import React from 'react';
import styled from 'styled-components';
import { Marginer } from '../marginer';


const CardContaier = styled.div`
display:flex;
flex-direction:column;
overflow:hidden;
width:300px;
min-height:250px;
background-color:white;
box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
margin:0.5em;
margin-bottom: 1.3em;
`; 

const TopContainer = styled.div`
width:100%;
`;

const ServiceThumbnail = styled.div`
width:100%;
height:11em;

img{
    width:100%;
    height:100%;
}
`;

const ContentContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
flex:1;
padding: 15px 14px;
`;

const Title = styled.h2`
font-size:19px;
marign:0;
font-weight:500;
color:#000;
text-align:start;
`;

const BottomContainer = styled.div`
width:100%;
height:32px;
display:flex;
align-items:center;
justify-content:space-between;
border-top: 1px solid rgba(15,15,15,0.19);
padding: 0 10px; 
`;

const SpecialistName = styled.h4`
margin: 0;
color:rbga(151,151,151,1);
font-size:12px;
font-weight:400;
`;

const RatingContainer = styled.div`
display:flex;
color:#EBE204;
`;

const PriceContainer = styled.div`
display:flex;
align-items:center;
`;

const PriceText = styled.div`
margin-left:3px;
color:#2A9D8F;
font-weight: 500;
`;

const StaringAtText = styled.h6`
margin:0;
color:rbga(161,161,161,0.9);
font-weight:400;
`;

function ServiceCard(props) {
    const {thumbnailUrl, specialist, id, title, rate, rating} = props;
    return (
        <CardContaier>
            <TopContainer>
                <ServiceThumbnail>
                    <img src={thumbnailUrl} alt={title}/>
                </ServiceThumbnail>
            </TopContainer>
            <ContentContainer>
                <Title>{title}</Title>
                <Marginer direction="vertical" margin={10}/>
                <SpecialistName>{specialist.fullName}</SpecialistName>
            </ContentContainer>
            <BottomContainer>
                <RatingContainer>
                    <StarRateIcon/>
                    {rating}
                </RatingContainer>
                <PriceContainer>
                    <StaringAtText>STARTING AT</StaringAtText>
                    <PriceText>${rate}/hr</PriceText>
                </PriceContainer>
            </BottomContainer>
        </CardContaier>
    );
}

export default ServiceCard;