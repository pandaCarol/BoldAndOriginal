import React from "react";
import styled from "styled-components";
import { defaultSection, defaultSubTitle, defaultUl, defaultLi } from "../css/cssDefault";

import linkedIn from '../imgs/icon/linkedIn.svg';
import linkedInHover from '../imgs/icon/linkedInHover.svg';
import linkedInHoverBlueGreen from '../imgs/icon/linkedInHoverBlueGreen.svg';
import faq from '../imgs/icon/faq.svg';
import email from '../imgs/icon/email.svg';
import emailHover from '../imgs/icon/emailHover.svg';
import home from '../imgs/icon/home.svg';
import phone from '../imgs/icon/phone.svg';
const icons = [home, phone, email];

const TitleWrapper = styled(defaultSection)`
    &:before {
        background-image: url(${linkedIn});
        left: -0.2rem;
    }

    &:after {
        background-image: url(${email});
        left: calc(1rem + 2vw);
    }

    &:hover:before  {
        cursor: pointer;
        background-image: url(${linkedInHover});
        height: 2.1rem;
        width: 2.1rem;

    }
`
const TitleContent = styled(defaultSubTitle)`
    font-weight: 500;
    margin-block-end: 0.5rem;
`
const IconWrapper = styled.div`
    height: 2.5rem;

    a,div {
        display: inline-block;
        height: 2rem;
        width: 2rem;
        background-repeat: no-repeat;
        background-size: contain;

        :hover {
            cursor: pointer;
            height: 2.1rem;
            width: 2.1rem;
        }
    }

    div {
        background-image: url(${email});
        :hover {
            background-image: url(${emailHover});
        }

    }

    a {
        margin-right: 1rem;
        background-image: url(${linkedIn}); 
        :hover {
            background-image: url(${linkedInHoverBlueGreen});
        }
    }

`
const ContactWrapper = styled(defaultUl)`
    align-self: flex-end;
    text-align: left;
    list-style-type: none;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        height: 60%;
        width: 60%;
        background-image: url(${faq});
        background-repeat: no-repeat;
        background-size: contain;
        left: calc(-1rem - 20%);
        top: 12.5%;
    }
`

const ContactInfo = styled(defaultLi)`
    position: relative;
    &:before {
        content: '';
        position: absolute;
        height: 1.2rem;
        width: 1.2rem;
        background-image: url(${props => props.bullets});
        background-size: contain;
        left: -1.5rem;
        top: 0.1rem;
    }
`
const Icons = <>
        <a href="https://www.linkedin.com/company/bold-and-original/about/" target="_blank"/>
        <div id='emailContact'></div>
    </>

export const Title = ({ title }) => {
    return (
        <TitleWrapper>
            <TitleContent>{title}</TitleContent>
            <IconWrapper>{Icons}</IconWrapper>
        </TitleWrapper>
    )
}

export const Contact = ({lists}) => {
    const contactDetails = lists.map( (list, index) => {
        return (
            <ContactInfo key={list.icon} className={list.icon} bullets={icons[index]}>{list.details}</ContactInfo>
        )
    })
    return (
        <ContactWrapper>
            {contactDetails}
        </ContactWrapper>
    )
}