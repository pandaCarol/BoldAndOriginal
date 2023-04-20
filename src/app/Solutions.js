import React from "react";
import styled from "styled-components";
import { SolutionWay } from "../components/solutionTable";
import { defaultSection, pageTitle } from "../css/cssDefault";
import pagesData from '../data/pagesData.json';

const Wrapper = styled(defaultSection)`
    display: flex;
    padding-top: calc(0.5rem + 20vh);
    margin: calc(1rem + 18vh) 0 calc(1rem + 5vh);
    position: relative;
    height: 80vh;
`
const Title = styled(pageTitle)`
`

export const Solutions = () => {
    return (
        <Wrapper id='solutions'>
            <Title>{pagesData.solutions.title}</Title>
            <SolutionWay
                columns={pagesData.solutions.subTitlesColumn}
                rows={pagesData.solutions.steps}
            />
        </Wrapper> 
    )
}
