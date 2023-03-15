import React from "react";
import styled from "styled-components";

const IconDiv = styled.img`
    widt: 150px;
    height: 94px;
    margin: 3px;

    &:hover {
        cursor: pointer;
        width: 160px;
        height: 100px;

        border-radius: 150px;
    }
`

export const IconWrapper = ({iconLink}) => {
    return (
        <IconDiv src={iconLink}></IconDiv>
    )
}