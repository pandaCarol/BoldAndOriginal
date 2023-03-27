import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { FormsInput, FormsTitle, IconDropDown } from "./FormSubcomponents";
import pagesData from '../../data/pagesData.json';
import styled from "styled-components";
import { defaultForm } from "../../css/cssDefault";

import user from '../../imgs/forms/user.svg';
import email from '../../imgs/forms/email.svg';
import phone from '../../imgs/forms/phone.svg';
import dropDown from '../../imgs/forms/dropDown.svg';
import dropDownHover from '../../imgs/forms/dropDownHover.svg';
import goUpHover from '../../imgs/forms/goUpHover.svg';
import goUp from '../../imgs/forms/goUp.svg';


const StyledTitle = styled(FormsTitle)`
    background-color: #EBD134;
`
const StyledForm = styled(FormsInput)`
    display: none;
`

const StyledFormWrapper = styled(defaultForm)`
    position: relative;

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

export const UserForm = () => {
    const [isHidden, setIsHidden] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    function handelOnClick() {
        setIsHidden(previous => !previous);
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    const infosForm = pagesData.forms.clientsInfo.infos.map(item => {

        return (
            <StyledForm key={item.content}
                type = "text"
                fieldName={item.content}
                placeHolder = {item.content}
                reminder = {item.ErrMes}
                register = {register}
                patternReminder = { item.patternReminder }
                errors = { errors }
                isRequired = {true}
                minimLength = { 2 }
            />
        )
    })

    return (
        <StyledFormWrapper onSubmit={handleSubmit(onSubmit)} isHidden={isHidden}>
            <StyledTitle className='aboutYou' >{pagesData.forms.clientsInfo.title.onPage}</StyledTitle>
            <IconDropDown iconOnClick={handelOnClick}/>
            <Div className="inputForms" tobeHidden={isHidden}>{infosForm}</Div>
            <input type="submit" value="Submit"/>
        </StyledFormWrapper>
    )
}