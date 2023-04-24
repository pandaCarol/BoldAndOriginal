import React from "react";
import styled from "styled-components";
import { Benefits, CaseExamples } from "../components/subComponents/features";

import feature from '../imgs/bg/feature.jpg';
import { defaultSection } from "../css/cssDefault";

import pagesData from '../data/pagesData.json';

const FeaturesWrapper = styled(defaultSection)`
    padding-top: calc(0.5rem + 20vh);
    display: flex;
    flex-direction: row;
    position: relative;
    height: 80vh;
    
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
        <FeaturesWrapper img={feature} id='features'>
            <Benefits 
                title={pagesData.features.benefits.title} 
                subtitles={pagesData.features.benefits.subTitle}
            />
            <CaseExamples examples={pagesData.features.cases}/>
        </FeaturesWrapper>
    )
}