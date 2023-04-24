import React from "react";
import styled from "styled-components";

import iconClose from '../../imgs/icon/iconClose.svg';
import { UseFormToggleHandel } from "../hooks";

const Wrapper = styled.div`
    &&.iconClose {
        position: absolute;
        top: 6rem;
        right: 3rem; 
        content: "";
        width: 1.5rem;
        height: 1.5rem;
        background-image: url(${iconClose});
        background-size: contain;
        background-repeat: no-repeat;
        
        margin: auto 0;

        :hover {
            cursor: pointer;
            top: 5.8rem;
            right: 2.8rem;
            width: 1.9rem;
            height: 1.9rem;
        }
    }
`

export const CloseBtn = () => {
    const toHidden = UseFormToggleHandel()

    return (
        <Wrapper className="iconClose" onClick={toHidden}></Wrapper>
    )
}
