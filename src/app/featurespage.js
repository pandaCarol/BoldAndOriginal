import React from "react";
import styled from "styled-components";
import { Benefits } from "../components/features";

import feature from '../imgs/bg/feature.png';

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
        percentage: ['20%'],
        title:['Data Analysis'],
        subTitle: ['“With a higher quality score, you could get 20% higher CTR and 122 more Clicks.”']
    },
    DeeperDive: {
        percentage: ['80%'],
        title: ['Deeper Dive + Action Plan'],
        subTitle: ['“You quality score is low due to low ad relevance; take the following action to improve CTR and Click...”']
    },
}

const FeaturesWrapper = styled.div`
    display: flex;

    height: 85vh;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
`
export const FeaturesPage = () => {

    return (
        <FeaturesWrapper img={feature}>
            <Benefits titles={FeaturesContent.benefits.title} subtitles={FeaturesContent.benefits.subTitle}/>
        </FeaturesWrapper>
    )
}