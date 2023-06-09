import React from "react";
import styled from "styled-components";
import { defaultSection, defaultTitle, defaultsText, defaultSubTitle } from "../../css/cssDefault";

import star from '../../imgs/icon/star.svg';

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
const CasesWrapper = styled(defaultSection)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: calc(1rem + 5vh) 4vw;
    height: 100%;
`
const ExampleWrapper = styled(defaultSection)`
    text-align: right;
    align-self: flex-end;
    height: max-content;

    &:first-child {
        margin-right: calc(3rem + 2vw);
        
    }
`
const ExamplePercentage = styled(defaultTitle)`
    color: ${props => props.className === '20%' ? '#CE9D85B2' : '#007C97'};
    margin-block-end: 0.5rem;
    font-size: ${props => props.className === '20%' ? '4rem' : '7rem'};
`
const ExampleTitle = styled(defaultSubTitle)`
    font-size: 1.4rem;
`
const ExampleContent = styled(defaultsText)`
`

export const Benefits = ({title, subtitles}) => {
    const subtitleContents = subtitles.map((sub, index) => {
        return (
            <Subtitle key={index} img={star}>
                {sub}
            </Subtitle>
        )
    })

    return (
        <BenefitsWrapper>
            <Title >{title}</Title>
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