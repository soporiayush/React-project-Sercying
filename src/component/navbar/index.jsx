import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Button } from '../button';
import { Marginer } from '../marginer';

const NavbarContainer = styled.div`
width:100%;
height:65px;
display:flex;
align-items:center;
justify-content: space-between;
padding: 0 1.5rem;
background-color: ${({useTransparent})=> useTransparent ? "transparent" : "#264653" };
`;

const AccessbilityContainer = styled.div`
display:flex;
height:100%;
align-items:center;
`;

const AnchorLink = styled(Link)`
font-size:17px;
color:#fff;
cursor: pointer;
text-decoration: none;
outline:none;
tansition: all 200ms ease-in-out;

&:hover{
    filter:contrast(0.6);
}
`;

const Seperator = styled.div`
min-height:42%;
width:1px;
background-color:white;
`;

export function Navbar(props) {
    
    const {useTransparent} = props;
    return (
        <NavbarContainer useTransparent={useTransparent}>
            <BrandLogo logoSize={35} textSize={22}/>
            <AccessbilityContainer>
                <AnchorLink>
                    Specialist Portal
                </AnchorLink>
                <Marginer direction="horizontal" margin={10}/>
                <Seperator></Seperator>
                <Marginer direction="horizontal" margin={10}/>
                <Link to="customer/access/signup">
                    <Button size={12}>Register</Button>
                </Link>
                <Marginer direction="horizontal" margin={20}/>
                    <AnchorLink to="customer/access/signin">Login</AnchorLink>
            </AccessbilityContainer>
        </NavbarContainer>
    );
}
