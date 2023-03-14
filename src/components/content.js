import React from "react";
import styled from "styled-components";

import { defaultSection, defaultTitle, defaultSubTitle, defaultsText } from '../css/cssDefault';

const ContentWrapper = styled(defaultSection)`
    width: 60%;
    padding: 240px 0;
    margin: auto 4vw;
`
const Title = styled(defaultTitle)`

`
const Subtitle = styled(defaultsText)`
    width: 65%;
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