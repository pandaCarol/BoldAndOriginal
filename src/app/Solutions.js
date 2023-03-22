import React from "react";
import styled from "styled-components";
import { SolutionWay } from "../components/solutionTable";
import { defaultSection, pageTitle } from "../css/cssDefault";
import pagesData from '../data/pagesData.json';

const Wrapper = styled(defaultSection)`
    display: flex;
    margin: calc(1rem + 5vh) 0;
    position: relative;

    height: 80vh;
`
const Title = styled(pageTitle)`
`

export const Solutions = () => {
    return (
        <Wrapper>
            <Title>{pagesData.solutions.title}</Title>
            <SolutionWay
                columns={pagesData.solutions.subTitlesColumn}
                rows={pagesData.solutions.steps}
            />
        </Wrapper> 
    )
}
