import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../images/logos/logo.png'
const BrandLogoContainer = styled.div`
display:flex;
align-items:center;
`;

const LogoImage = styled.div`
width: ${({size})=>size?size + "px" : "4em"};
height: ${({size})=>size?size + "px" : "4em"};
    img{
        width:100%;
        height:100%;
    }
`;

const LogoTitle = styled.h2`
margin:0;
font-size: ${({size})=>size?size + "px" : "35px"};
color:#fff;
font-weight:700;
margin-left:8px;
`;

export function BrandLogo(props) {
    
    const {logoSize,textSize} = props
    
    return (
        <BrandLogoContainer>
            <LogoImage size={logoSize}>
                <img src={LogoImg} alt="This is a logo image"/>
            </LogoImage>
            <LogoTitle size={textSize}>
                Servycing
            </LogoTitle>
        </BrandLogoContainer>
    );
}
