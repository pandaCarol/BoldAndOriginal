import React, { useState } from "react";
import styled from "styled-components";

import { FormsInput } from "../forms/text-Inputs";
import { Titles } from "../forms/FormsTitle";
import { defaultForm } from "../../css/cssDefault";

import user from '../../imgs/forms/user.svg';
import email from '../../imgs/forms/email.svg';
import phone from '../../imgs/forms/phone.svg';
import dropDown from '../../imgs/forms/dropDown.svg';
import dropDownHover from '../../imgs/forms/dropDownHover.svg';
import goUpHover from '../../imgs/forms/goUpHover.svg';
import goUp from '../../imgs/forms/goUp.svg';
import valid from '../../imgs/forms/valid.svg';

import { validedSubmit } from "../../functions/validedSubmit";

const StyledForm = styled(FormsInput)`
    display: none;
`

const StyledFormWrapper = styled(defaultForm)`
    position: relative;
    h2 {
        :hover {
            height: ${props => props.submitted ? "default" : "3rem"};
            cursor: ${props => props.submitted ? "default" : "pointer"};
            .dropDown {
                background-image: url(${props => props.isHidden ? dropDownHover: goUpHover});
                top: ${props => props.isHidden ? "0.8rem": "0.5rem" }
            }
        }

        .dropDown {
            background-image: url(${props => props.isHidden ? dropDown: goUp});
            display: ${props => props.submitted ? "none" : "block"};
        }

        @keyframes unValid {
            0%   {transform: rotate(0deg);}
            20%   {transform: rotate(2deg);}
            40%  {transform: rotate(0deg);}
            60%   {transform: rotate(-2deg);}
            80%  {transform: rotate(0deg);}
            100% {transform: rotate(2deg);}
        }

        animation-name: ${props => props.validStatus === -1 ? "unValid": "none"};
        animation-duration: 0.25s;
        animation-iteration-count: 3;
        animation-timing-function: ease-in-out;
        color: ${props => props.validStatus === -1 ? "#e91640": "#555B70"}
    }

    .validIcon {
        display:  ${props => props.validStatus === 1 ? "block": "none"};
        position: absolute;
        content: '';
        background-repeat: no;
        background-size: contain;
        width: 1.25rem;
        height: 1.25rem;
        top: 0.8rem;
        right: 35%;
        background-image: url(${valid});
    }

    .firstName::before{
        background-image: url(${user});
    }
    .emailAddress::before{
        background-image: url(${email});
    }
    .phoneNumber::before{
        background-image: url(${phone});
    }

    .inputForms {
        display: ${props => props.tobeHidden};
    }
`
const Div = styled.div`
    display: ${props => {
        if (props.submitted) {
            return 'none'
        }
        return (props.tobeHidden ? "none" : "block")
    }};
`


export const UserForm = ({ register, errors, verified, submitted, contents, title, formHidden }) => {
   //if form on landing Page, then form content should be hidden and drop down icon should be displayed
   //means hiddenState -> true, <DropDown> props toDisplay -> true
   const [hiddenState, setHiddenState] = useState(initialState);
    
   function initialState () {
        return (formHidden === true ? true : false)
   }

   function toggle() {
        if (formHidden === true) {
            setHiddenState(previous => !previous)
        }
   }
    
    const fieldName = [];
    const infosForm = contents.infos.map(item => {
        fieldName.push(item.content);
        return (
            <StyledForm key={item.content}
                type = {item.type}
                fieldName={item.content}
                placeHolder = {item.content}
                reminder = {item.ErrMes}
                register = { register }
                patternReminder = { item.patternReminder }
                errors = { errors }
                isRequired = {true}
                minimLength = { 2 }
            />
        )
    })

    const errorsArray = Object.keys(errors);
    const validStatus = validedSubmit(verified, errorsArray, fieldName);

    return (
        <StyledFormWrapper className="users" isHidden={hiddenState} validStatus={validStatus} submitted={submitted}>
            <Titles 
                className='aboutYou' 
                title={title} dropdownDisplay={formHidden} onClick={toggle}
                isHidden={hiddenState} submitted={submitted} validstatus={validStatus}
            />  
            <Div className="inputForms" tobeHidden={hiddenState} submitted={submitted}>{infosForm}</Div>
        </StyledFormWrapper>
    )
}


