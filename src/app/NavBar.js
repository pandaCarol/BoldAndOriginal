import React from "react";
import { IconWrapper } from "../components/icon";
import { ContactSale } from "../components/btn";
import { NavigationBar } from "../components/navBtn";
import styled from 'styled-components';
import logoColor from '../imgs/logo/logoColor.png';


const HeaderWrapper = styled.header`
    display: flex;
    margin: 12px;
`
const NavWrapper = styled.section`
    text-align: right;
    width: 100vw;
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