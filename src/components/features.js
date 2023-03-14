import React from "react";
import styled from "styled-components";
import { defaultSection, defaultTitle, defaultsText, defaultSubTitle } from "../css/cssDefault";

const BenefitsWrapper = styled(defaultSection)`
    margin: 2vw 4vw;
`
const Title = styled(defaultSubTitle)`

`
const Subtitle = styled(defaultsText)`
`

export const Benefits = ({titles, subtitles}) => {
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
        <BenefitsWrapper>
            {titleContents}
            {subtitleContents}
        </BenefitsWrapper>
    )
}