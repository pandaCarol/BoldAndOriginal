import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FAQContent } from "../components/faq";
import { defaultSection, defaultTitle } from "../css/cssDefault";


import pagesData from '../data/pagesData.json';

import iconClose from '../imgs/icon/iconClose.svg';
import { Link, useNavigate } from "react-router-dom";
import { CloseBtn } from "../components/closeBtn";
import { UseFormHiddenState, UseFormToggleHandel } from "../components/hooks";

const FAQWrapper = styled(defaultSection)`
    position: fixed;
    z-index: 3;
    top: -100vh;
    left: 0;
    margin: calc(1rem + 18vh) 0 calc(1rem + 5vh);
    background-color: white;
    text-align: center;
    height: 100vh;
    width: 100%;

    .titleWrapper {
        position: sticky;

        .iconClose {
            top: 2.5rem;
            :hover {
                top: 2.3rem;
            }
        }
    }
`
const Title = styled(defaultTitle)`
`
const TitleWrapper = styled.div`
    padding: 1rem 0;
    background-color: rgb(235, 209, 52);
    width: 100%;
    top: 0;
    z-index: 5;

    display: grid;
    grid-template-columns: 50fr 1fr;
`
const closeBtn = <CloseBtn />

export const FAQ = () => {
    const isHidden = UseFormHiddenState()
    //console.log(isHidden)
    return (
        <FAQWrapper style={{'display': `${isHidden ? 'none' : 'block'}`}}>
            <TitleWrapper className="titleWrapper" >
                <Title>{pagesData.faq.title}</Title>
                {closeBtn}
            </TitleWrapper>
            <FAQContent lists={pagesData.faq.content}/>
        </FAQWrapper> 
    )
}