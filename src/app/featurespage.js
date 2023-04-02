import React from "react";
import styled from "styled-components";
import { Benefits, CaseExamples } from "../components/features";

import feature from '../imgs/bg/feature.jpg';
import { defaultSection } from "../css/cssDefault";

import pagesData from '../data/pagesData.json';

const FeaturesWrapper = styled(defaultSection)`
    margin: calc(1rem + 15vh) 0 0;
    display: flex;
    position: relative;
    
    &&:before {
        position: absolute;
        z-index: -1;
        content: "";
        width: 100%;
        height: 100%; 
        background-image: url(${props => props.img});
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.35;
        transform: rotateX(180deg);
    }
`

export const FeaturesPage = () => {
    return (
        <FeaturesWrapper img={feature}>
            <Benefits 
                title={pagesData.features.benefits.title} 
                subtitles={pagesData.features.benefits.subTitle}
            />
            <CaseExamples examples={pagesData.features.cases}/>
        </FeaturesWrapper>
    )
}