import React from "react";
import styled from "styled-components";
import { defaultNaviButton, defaultSection } from "../css/cssDefault";
import { NavLink, Link } from "react-router-dom";

const BarWrapper = styled(defaultSection)`
    margin-top: 0.5rem;
    flex-direction: row;
    align-self: flex-end;
`
const NaviButton = styled(defaultNaviButton)`
    &:hover {
        cursor: pointer;
        
        font-weight: 700;
        color: #007C97;

    }
`
//letter-spacing: 0px;
export const NavigationBar = ({contents})  => {
    
    const naviContents = contents.map(item => {
        return(
            <Link key={item.name} to={item.name} >
                <NaviButton >{item.contents}</NaviButton>
            </Link>
        )
    })

    return (
        <BarWrapper>{naviContents}</BarWrapper>
    )
}