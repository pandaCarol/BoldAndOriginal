import React from "react";
import styled from "styled-components";
import { defaultNaviButton } from "../css/cssDefault";

const BarWrapper = styled.section`
`
const NaviButton = styled(defaultNaviButton)`
    &:hover {
        cursor: pointer;
        
        font-weight: 700;
        letter-spacing: 2px;
        color: #555B70;

    }
`
export const NavigationBar = ({contents})  => {
    const naviContents = contents.map(content => {
        return(
            <NaviButton key={content}>{content}</NaviButton>
        )
    })

    return (
        <BarWrapper>{naviContents}</BarWrapper>
    )
}