import React from "react";
import styled from "styled-components";
import { Content } from "../components/content";

import bg from '../imgs/bg/bg.png';
import { FormsComponents } from "../components/forms";
import { defaultSection } from "../css/cssDefault";

const HomeContent = {
    backgroundImg: bg,
    title: ['Stop Guessing. ', 'Turn Data Into Action.'],
    subTitle: ['Google Ads campaign audits done and explained in human language that drives actions'],
}

const HomeWrapper = styled(defaultSection)`
    display: flex;
    height: 100vh;
    scroll-margin-top: 7.75rem;
    position: relative;
    top: 0;
    z-index: 3;
`
export const Homepage = () => {

    return (
        <HomeWrapper img={bg}>
            <Content titles={HomeContent.title} subtitles={HomeContent.subTitle} img={bg}/>
            <FormsComponents></FormsComponents>
        </HomeWrapper>
    )
}