import React from "react";
import styled from "styled-components";
import { Content } from "../components/content";

import bg from '../imgs/bg/bg.png';
import { FormsComponents } from "../components/forms";
import { defaultSection } from "../css/cssDefault";

import pagesData from '../data/pagesData.json';

const HomeWrapper = styled(defaultSection)`
    display: flex;
    height: 100vh;
    scroll-margin-top: 7.75rem;
    position: relative;
`
export const Homepage = () => {

    return (
        <HomeWrapper img={bg}>
            <Content 
                titles={pagesData.home.title} 
                subtitle={pagesData.home.subTitle} 
                img={bg}
            />
            <FormsComponents></FormsComponents>
        </HomeWrapper>
    )
}