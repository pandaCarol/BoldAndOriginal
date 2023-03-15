import React from "react";
import styled from "styled-components";
import { Benefits, CaseExamples } from "../components/features";

import feature from '../imgs/bg/feature.jpg';

const FeaturesContent = {
    backgroundImg: feature,
    benefits: {
        title: ['Benefits of Action-Driven Audits:'],
        subTitle: 
            [
                'Data points connected with logic', 
                'More digestible insights', 
                'Allows actions to be taken right away'
            ],
    },
    dataAnalysis: {
        percentage: '20%',
        title:'Data Analysis',
        content: '“With a higher quality score, you could get 20% higher CTR and 122 more Clicks.”'
    },
    DeeperDive: {
        percentage: '80%',
        title: 'Deeper Dive + Action Plan',
        content: '“You quality score is low due to low ad relevance; take the following action to improve CTR and Click...”'
    },
}

const FeaturesWrapper = styled.div`
    display: grid;
    height: 85vh;
    
    &&:before {
        position: absolute;
        z-index: -1;
        content: "";
        width: 100%;
        height: 85%; 
        background-image: url(${props => props.img});
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.35;
        transform: rotateX(180deg);
    }
`
const examples = [FeaturesContent.dataAnalysis, FeaturesContent.DeeperDive];
export const FeaturesPage = () => {

    return (
        <FeaturesWrapper img={feature}>
            <Benefits titles={FeaturesContent.benefits.title} subtitles={FeaturesContent.benefits.subTitle}/>
            <CaseExamples examples={examples}/>
        </FeaturesWrapper>
    )
}