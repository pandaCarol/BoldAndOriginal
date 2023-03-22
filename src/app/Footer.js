import React from "react";
import styled from "styled-components";
import { Contact, Title } from "../components/footers";
import { defaultSection } from "../css/cssDefault";

import pagesData from '../data/pagesData.json';

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: #EBD134;
    padding: 0 calc(1rem + 2vw);
`

export const Footer = () => {
    return (
        <FooterWrapper>
            <Title title={pagesData.footer.title}/>
            <Contact lists={pagesData.footer.contact}/>
        </FooterWrapper>
    )
}

