import React from "react";
import styled from "styled-components";
import { Products } from "../components/pricing";
import { defaultSection, pageTitle } from "../css/cssDefault";

import pagesData from '../data/pagesData.json';

const PricingWrapper = styled(defaultSection)`
    display: flex;
    margin: calc(1rem + 5vh) 0;
    position: relative;
`
const Title = styled(pageTitle)`
`

export const Pricing = () => {
    return (
        <PricingWrapper >
            <Title>{pagesData.pricing.title}</Title>
            <Products contents={pagesData.pricing.packages}/>
        </PricingWrapper> 
    )
}