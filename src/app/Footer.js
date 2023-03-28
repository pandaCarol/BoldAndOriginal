import React, { useState } from "react";
import styled from "styled-components";
import { Contact, Title } from "../components/footers";
import { ToggleProviders } from "../components/hooks";
import { defaultSection } from "../css/cssDefault";

import pagesData from '../data/pagesData.json';
import { FAQ } from "./FAQ";

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: #EBD134;
    padding: 0 calc(1rem + 2vw);

    position: relative;
`

export const Footer = () => {
    return (
        <ToggleProviders>
            <FooterWrapper>
                <Title title={pagesData.footer.title}/>
                <Contact lists={pagesData.footer.contact}/>
                <FAQ />
            </FooterWrapper>
        </ToggleProviders>
        
    )
}

