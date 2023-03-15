import React from "react";
import styled from "styled-components";

import { defaultSection, defaultTitle, defaultSubTitle, defaultsText } from '../css/cssDefault';

const ContentWrapper = styled(defaultSection)`
    width: 60%;
    padding: 260px 0;
    margin: auto 4vw;
`
const Title = styled(defaultTitle)`
    font-size: 30px;
`
const Subtitle = styled(defaultsText)`
    font-size: 20px;
`

export const Content = ({titles, subtitles}) => {
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
        <ContentWrapper>
            {titleContents}
            {subtitleContents}
        </ContentWrapper>
    )
}