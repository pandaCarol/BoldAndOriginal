import React from "react";
import styled from "styled-components";
import { Content } from "../components/subComponents/homeContents";

import bg from '../imgs/bg/bg.png';
import { FormsComponents } from "./FormOnPage";
import { defaultSection } from "../css/cssDefault";

import pagesData from '../data/pagesData.json';

const HomeWrapper = styled(defaultSection)`
    display: flex;
    flex-direction: row;
    height: 100vh;
    scroll-margin-top: 7.75rem;
    position: relative;
`
export const Homepage = () => {

    return (
        <HomeWrapper img={bg} id='home'>
            <Content 
                titles={pagesData.home.title} 
                subtitle={pagesData.home.subTitle} 
                img={bg}
            />
            <FormsComponents/>
        </HomeWrapper>
    )
}