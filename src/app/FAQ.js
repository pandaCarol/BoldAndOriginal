import React from "react";
import styled from "styled-components";
import { FAQContent } from "../components/faq";
import { defaultSection, defaultTitle } from "../css/cssDefault";
import pagesData from '../data/pagesData.json'

const FAQWrapper = styled(defaultSection)`
    margin: calc(1.5rem + 5vh) calc(1.5rem + 10vw);
    text-align: center;
    height: 100vh;
`
const Title = styled(defaultTitle)`
    padding: 3rem 0;
    background-color: white;
    position: sticky;
    top: 15vh;
    z-index: 2;
`

export const FAQ = () => {
    return (
        <FAQWrapper >
            <Title>{pagesData.faq.title}</Title>
            <FAQContent lists={pagesData.faq.content}/>
        </FAQWrapper>
    )
}