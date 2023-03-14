import React from "react";
import styled from "styled-components";

import { defaultSection, defaultTitle, defaultSubTitle, defaultsText } from '../css/cssDefault';

const ContentWrapper = styled(defaultSection)`
    width: 60vw;
    margin: auto 4vw;
    top: 45%;
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