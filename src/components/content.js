import React from "react";
import styled from "styled-components";

import { defaultSection, defaultTitle, defaultSubTitle, defaultsText } from '../css/cssDefault';

const ContentWrapper = styled(defaultSection)`
    width: 70%;
    padding-top: calc(10rem + 5vh);
    margin: auto 4vw;

    &&:before {
        position: absolute;
        width: 100%;
        height: 85%;
        top: 15%;
        left: -10%;
        z-index: -1;

        content: "";
        background-image: url(${props => props.img});
        background-repeat: no-repeat;
        background-size: 85% 100%;
        opacity: 0.45;
    }
`
const Title = styled(defaultTitle)`
    font-size: 30px;
`
const Subtitle = styled(defaultsText)`
    font-size: 20px;
`

export const Content = ({titles, subtitles, img}) => {
    const titleContents = titles.map((title, index) => {
        return (
            <Title key={index}>{title}</Title>
        )
    })

    const subtitleContents = subtitles.map((sub, index) => {
        return (
            <Subtitle key={index}>{sub}</Subtitle>
        )
    })

    return (
        <ContentWrapper img={img}>
            {titleContents}
            {subtitleContents}
        </ContentWrapper>
    )
}