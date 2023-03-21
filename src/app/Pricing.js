import React from "react";
import styled from "styled-components";
import { Products } from "../components/pricing";
import { defaultSection, pageTitle } from "../css/cssDefault";

const PricingContents = {
    title: 'Choose A Customized Service Based on Your Needs',

    package1: {
        productName: 'Google Ads Audit',
        additionalInfo: '',
        users: 'For experienced Google Ads users',
        price: '300',
        priceRange: 'C$300 - C$1,000 depending on account size',
        contents: ['A comprehensive audit based on past 90 days’ data in PDF'],
    },

    package2: {
        productName: 'Google Ads Audit PLUS',
        additionalInfo: 'Most Popular',
        users: 'For new Google Ads users',
        price: '500',
        priceRange: 'C$500 - C$1,200 depending on account size',
        contents: [
            'A comprehensive audit based on past 90 days’ data in PDF',
            'A 60min call (45min walk-through + 15min Q&A) on the same day of delivery'
        ],
    },
    
}

const PricingWrapper = styled(defaultSection)`
    display: flex;
    margin: calc(1rem + 5vh) 0;
    position: relative;
`
const Title = styled(pageTitle)`
`
const packages = [PricingContents.package1, PricingContents.package2];

export const Pricing = () => {
    return (
        <PricingWrapper >
            <Title>{PricingContents.title}</Title>
            <Products contents={packages}/>
        </PricingWrapper> 
    )
}