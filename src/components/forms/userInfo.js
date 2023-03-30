import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { FormsInput, FormsTitle, IconDropDown } from "./FormSubcomponents";
import pagesData from '../../data/pagesData.json';
import styled from "styled-components";
import { defaultForm } from "../../css/cssDefault";
import { UseFormHiddenState, UseFormToggleHandel, UsecontextSubmit, SubmitContents } from "../hooks";

import user from '../../imgs/forms/user.svg';
import email from '../../imgs/forms/email.svg';
import phone from '../../imgs/forms/phone.svg';
import dropDown from '../../imgs/forms/dropDown.svg';
import dropDownHover from '../../imgs/forms/dropDownHover.svg';
import goUpHover from '../../imgs/forms/goUpHover.svg';
import goUp from '../../imgs/forms/goUp.svg';
import valid from '../../imgs/forms/valid.svg';

import { validedSubmit } from "../../functions/validedSubmit";


const StyledTitle = styled(FormsTitle)`
    background-color: #EBD134;
    
    border-radius: ${props => props.isHidden ? "0.55rem" : "0.55rem 0.55rem 0 0"}
`
const StyledForm = styled(FormsInput)`
    display: none;
`

const StyledFormWrapper = styled(defaultForm)`
    position: relative;
    h2 {
        color: ${props => props.validStatus === -1 ? "red": "#555B70"}
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

    .dropDown {
        background-image: url(${props => props.isHidden ? dropDown: goUp});
        :hover {
            background-image: url(${props => props.isHidden ? dropDownHover: goUpHover});
            top: ${props => props.isHidden ? "0.8rem": "0.5rem" };
        }
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
    display: ${props => props.tobeHidden ? "none" : "block"};
`

export const UserForm = ({ register, errors, isSubmit }) => {
    const toggle = UseFormToggleHandel();
    const hiddenState = UseFormHiddenState();

    
    const fieldName = [];
    const infosForm = pagesData.forms.clientsInfo.infos.map(item => {
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
    const validStatus = validedSubmit(isSubmit, errorsArray, fieldName);

    return (
        <StyledFormWrapper isHidden={hiddenState} validStatus={validStatus}>
            <StyledTitle className='aboutYou' isHidden={hiddenState} >
                {pagesData.forms.clientsInfo.title.onPage}
            </StyledTitle>
            <div className='validIcon' />
            <IconDropDown onClick={toggle}/>
            <Div className="inputForms" tobeHidden={hiddenState}>{infosForm}</Div>
        </StyledFormWrapper>
    )
}