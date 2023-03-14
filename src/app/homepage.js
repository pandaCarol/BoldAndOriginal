import React from "react";
import styled from "styled-components";
import { Content } from "../components/content";

import bg from '../imgs/bg/bg.png';
import { FormsComponents } from "../components/forms";

const HomeContent = {
    backgroundImg: bg,
    title: ['Stop Guessing. ', 'Turn Data Into Action.'],
    subTitle: ['Google Ads campaign audits done and explained in human language that drives actions'],
}

const HomeWrapper = styled.div`
    display: flex;
    height: 80vh;
    position: relative;

    &&:before {
        position: absolute;
        z-index: -1;
        content: "";
        width 100%;
        height: 95%; 
        background-image: url(${props => props.img});
        background-repeat: no-repeat;
        background-size: 75% 100%;
        opacity: 0.45;
    }
`
export const Homepage = () => {

    return (
        <HomeWrapper img={bg}>
            <Content titles={HomeContent.title} subtitles={HomeContent.subTitle}/>
            <FormsComponents></FormsComponents>
        </HomeWrapper>
    )
}