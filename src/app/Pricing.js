import React from "react";
import styled from "styled-components";
import { Products } from "../components/subComponents/pricing";
import { defaultSection, pageTitle } from "../css/cssDefault";

import pagesData from '../data/pagesData.json';

const PricingWrapper = styled(defaultSection)`
    padding-top: calc(0.5rem + 20vh);
    display: flex;
    margin: calc(1rem + 18vh) 0 calc(1rem + 5vh);
    position: relative;
`
const Title = styled(pageTitle)`
`

export const Pricing = () => {
    return (
        <PricingWrapper id='pricing'>
            <Title>{pagesData.pricing.title}</Title>
            <Products contents={pagesData.pricing.packages}/>
        </PricingWrapper> 
    )
}