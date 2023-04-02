import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FAQContent } from "../components/faq";
import { defaultSection, defaultTitle } from "../css/cssDefault";


import pagesData from '../data/pagesData.json';

import iconClose from '../imgs/icon/iconClose.svg';
import { Link, useNavigate } from "react-router-dom";

const FAQWrapper = styled(defaultSection)`
    display: ${props => props.isHidden ? "none" : "block"};
    margin: calc(1rem + 18vh) 0 calc(1rem + 5vh);
    background-color: white;
    text-align: center;
    height: 100vh;
    width: 100%;

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
            background-image: url(${iconClose});
        }
    }
`
const Title = styled(defaultTitle)`
`
const TitleWrapper = styled.div`
    padding: 3rem 12vw;
    background-color: white;
    position: fixed;
    top: 16vh;
    z-index: 1;

    display: grid;
    grid-template-columns: 50fr 1fr;
`

export const FAQ = () => {
    const navigate = useNavigate()
    function goBack() {
        navigate(-1)
    }

    return (
        <FAQWrapper >
            <TitleWrapper className="titleWrapper" >
                <Title>{pagesData.faq.title}</Title>
                <div className="iconClose" onClick={goBack}></div>
            </TitleWrapper>
            <FAQContent lists={pagesData.faq.content}/>
        </FAQWrapper> 
    )
}