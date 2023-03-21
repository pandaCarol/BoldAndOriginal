import React from "react";
import { IconWrapper } from "../components/icon";
import { ContactSale } from "../components/btn";
import { NavigationBar } from "../components/navBtn";
import styled from 'styled-components';
import logoColor from '../imgs/logo/logoColor.png';

import { defaultSection } from "../css/cssDefault";


const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    background-color: white;

    display: flex;
    padding: 12px 0; 
`
const NavWrapper = styled(defaultSection)`
    
    text-align: right;
    flex-derection: row-reserve;
    width: 100%;
    margin: 1rem 2rem;
`
const  NavContents = {
    icon: logoColor,
    btn: 'Contact Sales',
    navbar: ['Why Bold & Original', 'Solutions', 'Pricing', 'About'],

}

export const NavBar = () => {
    console.log(NavContents)
    return (
        <HeaderWrapper>
            <IconWrapper iconLink={NavContents.icon}/>
            <NavWrapper>
                <ContactSale contents={NavContents.btn} />
                <NavigationBar contents={NavContents.navbar} />
            </NavWrapper> 
        </HeaderWrapper>
        
    )
}