import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FAQContent } from "../components/faq";
import { UseToggleHandel, UseToggleState } from "../components/hooks";
import { defaultSection, defaultTitle } from "../css/cssDefault";

import pagesData from '../data/pagesData.json';

import iconClose from '../imgs/icon/iconClose.svg';

const FAQWrapper = styled(defaultSection)`
    display: ${props => props.isHidden ? "none" : "block"};
    margin: calc(1.5rem + 5vh) 0;
    background-color: white;
    text-align: center;
    height: 100vh;
    width: 100%;

    position:absolute;
    top: -65vh;
    left: 0;

    .iconClose {
        content: "";
        width: 1.5rem;
        height: 1.5rem;
        background-image: url(${iconClose});
        background-size: contain;
        background-repeat: no-repeat;
        
        margin: auto 0;

        :hover {
            cursor: pointer;
            width: 2rem;
            height: 2rem;
            background-image: url(${iconClose});
        }
    }
`
const Title = styled(defaultTitle)`
`
const TitleWrapper = styled.div`
    padding: 3rem 12vw;
    background-color: white;
    position: sticky;
    top: 16vh;
    z-index: 1;

    display: grid;
    grid-template-columns: 50fr 1fr;
`

export const FAQ = () => {
    const toggle = UseToggleHandel();
    const hiddenStatus = UseToggleState();

    return (
        <FAQWrapper isHidden={hiddenStatus}>
            <TitleWrapper className="titleWrapper">
                <Title>{pagesData.faq.title}</Title>
                <div className="iconClose" onClick={toggle}></div>
            </TitleWrapper>
            <FAQContent lists={pagesData.faq.content}/>
        </FAQWrapper> 
    )
}