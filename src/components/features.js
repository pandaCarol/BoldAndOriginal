import React from "react";
import styled from "styled-components";
import { defaultSection, defaultTitle, defaultsText, defaultSubTitle } from "../css/cssDefault";

import star from '../imgs/icon/star.svg';

//css for benifits block
const BenefitsWrapper = styled(defaultSection)`
    width: 90vw;
    margin: 5% 4vw 0;
`
const Title = styled(defaultTitle)`

`
const Subtitle = styled(defaultsText)`
    font-size: 20px;

    &&:before {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin: 0 12px 0 0;
        vertical-align: text-top;

        content: "";
        background-size: cover;
        background-image: url(${props => props.img});
        background-repeat: no-repeat;
    }
`
//css for cases block 
const CasesWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: auto 4vw;
`
const ExampleWrapper = styled(defaultSection)`
    text-align: right;
    width: 24%;
    &:first-child {
        margin-right: 54px;
    }
`
const ExamplePercentage = styled(defaultTitle)`
    color: ${props => props.className === '20%' ? '#EBD134' : '#007C97'};
    
`
const ExampleTitle = styled(defaultSubTitle)`
`
const ExampleContent = styled(defaultsText)`
`

export const Benefits = ({titles, subtitles}) => {
    const titleContents = titles.map((title, index) => {
        return (
            <Title key={index}>{title}</Title>
        )
    })

    const subtitleContents = subtitles.map((sub, index) => {
        return (
            <Subtitle key={index} img={star}>
                {sub}
            </Subtitle>
        )
    })

    return (
        <BenefitsWrapper>
            {titleContents}
            {subtitleContents}
        </BenefitsWrapper>
    )
}

export const CaseExamples = ({examples}) => {
    const cases = examples.map((example, index) => {
        return (
            <ExampleWrapper key={index}>
                <ExamplePercentage className={example.percentage}>{example.percentage}</ExamplePercentage>
                <ExampleTitle>{example.title}</ExampleTitle>
                <ExampleContent>{example.content}</ExampleContent>
            </ExampleWrapper>
        )
    })

    return (
        <CasesWrapper>{cases}</CasesWrapper>
    )
}