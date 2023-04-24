import React from "react";
import styled from "styled-components";
import { defaultSection } from "../css/cssDefault";
import { Founder, Introduction } from "../components/subComponents/aboutFounder";

import pagesData from '../data/pagesData.json';

const AboutWrapper = styled(defaultSection)`
    backgournd-color: rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: row;
    margin: calc(1rem + 18vh) calc(1.5rem + 10vw) calc(1rem + 15vh);
    padding: 2rem 1rem;
    padding-top: calc(2.5rem + 20vh);
`

export const About = () => {
    return (
        <AboutWrapper id='about'>
             <Founder item={pagesData.founder}/>
             <Introduction contents={pagesData.founder.introduction} />
        </AboutWrapper>
    )
}