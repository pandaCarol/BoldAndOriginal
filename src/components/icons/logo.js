import React from "react";
import styled from "styled-components";
import { scrollTo } from "../../functions/scrollTo";

const IconDiv = styled.img`
    width: 150px;
    height: 94px;
    margin: 3px;

    &:hover {
        cursor: pointer;
        width: 160px;
        height: 100px;

        border-radius: 150px;
    }
`

export const Logo = ({iconLink}) => {
    const targetPage = 'home'
    return (
        <IconDiv src={iconLink} onClick={() => scrollTo(targetPage)} className="logo"></IconDiv>
    )
}
