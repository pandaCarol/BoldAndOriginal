import React from "react";
import styled from "styled-components";
import { defaultNaviButton } from "../css/cssDefault";

const BarWrapper = styled.section`
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
    const naviContents = contents.map(content => {
        return(
            <NaviButton key={content}>{content}</NaviButton>
        )
    })

    return (
        <BarWrapper>{naviContents}</BarWrapper>
    )
}