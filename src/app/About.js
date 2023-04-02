import React from "react";
import styled from "styled-components";
import { defaultSection } from "../css/cssDefault";
import { Founder, Introduction } from "../components/aboutFounder";

import pagesData from '../data/pagesData.json';

const AboutWrapper = styled(defaultSection)`
    min-height: 50vh;
    backgournd-color: rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: row;
    margin: calc(1rem + 18vh) calc(1.5rem + 10vw) calc(1rem + 5vh);
    padding: 2rem 1rem;
`

export const About = () => {
    return (
        <AboutWrapper>
             <Founder item={pagesData.founder}/>
             <Introduction contents={pagesData.founder.introduction} />
        </AboutWrapper>
    )
}