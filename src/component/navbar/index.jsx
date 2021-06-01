import React from 'react';
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

`;

const AccessbilityContainer = styled.div`
display:flex;
height:100%;
align-items:center;
`;

const AnchorLink = styled.a`
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
    return (
        <NavbarContainer>
            <BrandLogo logoSize={35} textSize={22}/>
            <AccessbilityContainer>
                <AnchorLink>
                    Specialist Portal
                </AnchorLink>
                <Marginer direction="horizontal" margin={10}/>
                <Seperator></Seperator>
                <Marginer direction="horizontal" margin={10}/>
                <Button size={12}>Register</Button>
                <Marginer direction="horizontal" margin={20}/>
                <AnchorLink>Login</AnchorLink>
            </AccessbilityContainer>
        </NavbarContainer>
    );
}
