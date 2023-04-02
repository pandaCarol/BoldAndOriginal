import React from "react";
import styled from "styled-components";
import { defaultSection, defaultsText, defaultSubTitle, defaultTitle, pageTitle } from "../css/cssDefault";

import founder from '../imgs/pic/founder.svg';

const Title = styled(defaultTitle)`
    text-align: center;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 0;
    margin-left: 1vw;
    width: 50%;
`
const FounderName = styled(defaultSubTitle)`
    text-align: center;
    margin: 0;
    font-weight: 500;
    margin-left: 1vw;
    width: 50%;
`
const Wrapper = styled(defaultSection)`
    @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

    &&.founder {
        width: 45%;
        margin: 0;
        justify-content: center;
    }
    
    &&.intro {
        width: 55%;
        padding: 1rem 1.5 rem 1 rem calc(1.5rem + 5vw);
        text-align: justify;
        position: relative;
        margin-left: 0;

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
            bottom: calc(-1rem - 2vh);
        }
    }
`
const IntroContent = styled(defaultsText)`

`
const ProfilePic = styled.div`
    margin: calc(0.5rem + 1vh) auto;
    margin-left: 1vw;
    content: '';
    background-image: url(${founder});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 50%;
    height: calc(1rem + 25vh);
    
`
export const Founder = ({item}) => {
    return (
        <Wrapper className="founder">
            <ProfilePic className="profilePic"></ProfilePic>
            <FounderName>{item.name}</FounderName>
            <Title>{item.title}</Title>
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