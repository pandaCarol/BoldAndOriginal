import React from "react";
import styled from "styled-components";

const IconDiv = styled.img`
    widt: 150px;
    height: 94px;
    margin: 18px;

    &:hover {
        cursor: pointer;
        width: 160px;
        height: 100px;
        background-color: rgba(251,217,9, 0.25);

        border-radius: 150px;
    }
`

export const IconWrapper = ({iconLink}) => {
    return (
        <IconDiv src={iconLink}></IconDiv>
    )
}