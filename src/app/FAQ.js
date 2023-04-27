import React from "react";
import styled from "styled-components";
import { FAQContent } from "../components/subComponents/faq";
import { defaultSection, defaultTitle } from "../css/cssDefault";

import pagesData from '../data/pagesData.json';

import { UseFormHiddenState } from "../components/hooks";
import { SubPageTitleWrapper } from "../components/subComponents/subpageTitle";

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

    .logo {
        width: 120px;
        height: 75.2px;
        margin: 0;
        pointer-events: none;
    }

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

export const FAQ = () => {
    const isHidden = UseFormHiddenState()
    //console.log(isHidden)
    return (
        <FAQWrapper style={{'display': `${isHidden ? 'none' : 'block'}`}}>
            <SubPageTitleWrapper title={pagesData.faq.title}/>
            <FAQContent lists={pagesData.faq.content}/>
        </FAQWrapper> 
    )
}