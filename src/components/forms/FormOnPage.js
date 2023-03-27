import React from "react";
import styled from "styled-components";
import { defaultSection } from "../../css/cssDefault";

import { FormsTitle } from "./FormSubcomponents";

import pagesData from "../../data/pagesData.json";
import { UserForm } from "./userInfo";

const Wrapper = styled.div`
    height: 100%;
    margin: calc(3rem + 1vh) calc(1rem + 1vw) 0;
    text-align: center;
`

const FormsWrapper = styled(defaultSection)`
    width: 40vw;
    height: 85%;
    align-self: flex-end;
    background-color: white;
`
const StyledTitle = styled(FormsTitle)`
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
`


const StyledSubTitle = styled(FormsTitle)`
    font-size: 1rem;
    font-weight: 400;
    margin-block calc(0.5rem + 0.5vh);
    text-align: center;
`

export const FormsComponents = () => {
    return (
        <FormsWrapper>
            <Wrapper>
                <StyledTitle className="title">{pagesData.forms.onPage.title}</StyledTitle>
                <StyledSubTitle className="subtitle">{pagesData.forms.onPage.subTitle}</StyledSubTitle>
                <UserForm />
            </Wrapper>
        </FormsWrapper>
    )
}