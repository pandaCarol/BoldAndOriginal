import React from "react";
import styled from "styled-components";
import { defaultSection, defaultsText, defaultSubTitle, defaultTitle, pageTitle } from "../css/cssDefault";

import founder from '../imgs/pic/founder.svg';

const Title = styled(defaultTitle)`
    text-align: center;
`
const FounderName = styled(defaultSubTitle)`
    text-align: center;
`
const Wrapper = styled(defaultSection)`
    @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

    &&.founder {
        width: 45%;
        align-items: center;
        margin: auto 0;
    }
    
    &&.intro {
        width: 55%;
        padding: 1rem calc(1.5rem + 10vw);
        text-align: justify;
        position: relative;

        &&:before, &&:after {
            position: absolute;
            font-size: 2.5rem;
            font-family: 'Alata', sans-serif;
            color: #EBD134;
        }

        &&:before {
            content: '“';
            top: calc(-0.5rem - 0.5vh);
        }

        &&:after {
            content: '”';
            bottom: calc(-1rem - 1vh);
        }
    }
`
const IntroContent = styled(defaultsText)`
`
const ProfilePic = styled.div`
    margin: calc(0.5rem + 1vh) auto;
    content: '';
    background-image: url(${founder});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 70%;
    height: calc(1rem + 30vh);
    
`
export const Founder = ({item}) => {
    return (
        <Wrapper className="founder">
            <Title>{item.title}</Title>
            <ProfilePic className="profilePic"></ProfilePic>
            <FounderName>{item.name}</FounderName>
        </Wrapper>
    )
}

export const Introduction = ({contents}) => {
    const introContents = contents.map((content, index) => {
        return (
            <IntroContent key={index}>{content}</IntroContent>
        )
    })

    return (
        <Wrapper className="intro">
            {introContents}
        </Wrapper>
    )
}