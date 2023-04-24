import React from "react";
import styled from "styled-components";
import pagesData from '../../data/pagesData.json';

import { defaultSection, defaultTitle, defaultSubTitle, defaultsText, defaultLi, defaultUl } from "../../css/cssDefault";
import { CloseBtn } from "../icons/cross-icon";
import { HiddenWrapper, UseFormHiddenState } from "../hooks";

const Wrapper = styled(defaultSection)`
    position: relative;
    color: rgb(85, 91, 112);
    
    &&.terms {
        position: absolute;
        top: 15vh;
        left: 0;
        width: 61vw;
        height: 75vh;

        padding: 3rem;
        overflow-y: scroll;

        background-color: rgba(235, 209, 52, 0.92);
    }
`

const Title = styled(defaultTitle)`
    margin-top: calc(1rem + 5vh);
    text-align: center;
`
const SubTitle = styled(defaultSubTitle)`
    margin-top: 0.5rem;
    font-style: italic;
`
const Contents = styled(defaultsText)`
    margin-bottom: 0;
    font-style: italic;
`

const ContentsList = styled(defaultLi)`
`
const ListWrapper = styled.ol`
`

export const Terms = () => {
    const termsInfo = pagesData.forms.terms

    const termsList = termsInfo.contents.map((item, index) => {
       return <ContentsList key={index}>{item}</ContentsList>
    })

    const isHidden = UseFormHiddenState()
    //console.log(isHidden)

    return (
            <Wrapper className='terms' style={{'display': `${isHidden ? 'none' : 'block'}`} }>
                <Title>{termsInfo.title}</Title>
                <Contents>{termsInfo.update}</Contents>
                <SubTitle>{termsInfo.subTitle}</SubTitle>
                <ListWrapper className='termsList'>{termsList}</ListWrapper>
                <SubTitle>{termsInfo.footer}</SubTitle>
                <CloseBtn />
            </Wrapper>
    )
}