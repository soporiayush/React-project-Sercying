import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    color:#fff;
    padding: 0.6rem 2rem;
    font-size:${({size})=>size? size + "px": "18px" };
    font-weight:600;
    border-radius:3px;
    background-color: #2A9D8F;
    cursor:pointer;
    transition:all 200ms ease-in-out;
    &:hover{
        background-color: #47968D;
    }
    &:focus{
        outline:none;
    }
    `;

export function Button(props) {
    const {size}=props;
    return (
        <ButtonWrapper size={size} className={props.className}>
            {props.children}
        </ButtonWrapper>
    );
}
