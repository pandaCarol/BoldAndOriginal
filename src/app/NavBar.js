import React from "react";
import styled from 'styled-components';

import { Logo } from "../components/icons/logo";
import { ContactSale } from "../components/buttons/contactSales";
import { NavigationBar } from "../components/subComponents/navBtn";

import logoColor from '../imgs/logo/logoColor.png';

import { defaultSection } from "../css/cssDefault";

import pagesData from '../data/pagesData.json';

const HeaderWrapper = styled.header`
    position: fixed;

    top: 0;
    width: 100%;
    z-index: 2;
    background-color: white;

    display: flex;
    padding: 2vh 0;
`
const NavWrapper = styled(defaultSection)`
    
    text-align: right;
    flex-derection: row-reserve;
    width: 100%;
    margin: 1rem 2rem;
`

export const NavBar = () => {
    return (
        <HeaderWrapper>
            <Logo iconLink={logoColor} />
            <NavWrapper>
                <ContactSale contents={pagesData.header.btn} />
                <NavigationBar contents={pagesData.header.navbar} />
            </NavWrapper>
        </HeaderWrapper>
        
    )
}