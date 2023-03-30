import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { FormsInput, FormsRadio, FormsTextarea, FormsTitle, IconDropDown } from "./FormSubcomponents";
import pagesData from '../../data/pagesData.json';
import styled from "styled-components";
import { defaultForm } from "../../css/cssDefault";
import { HasAds } from "./painPointsSubForm";
import { UseFormHiddenState, UseFormToggleHandel } from "../hooks";
import { validedSubmit } from "../../functions/validedSubmit";


import dropDown from '../../imgs/forms/dropDown.svg';
import dropDownHover from '../../imgs/forms/dropDownHover.svg';
import goUpHover from '../../imgs/forms/goUpHover.svg';
import goUp from '../../imgs/forms/goUp.svg';
import valid from '../../imgs/forms/valid.svg';

const StyledTitle = styled(FormsTitle)`
    background-color: #EBD134;

    border-radius: ${props => props.isHidden ? "0.55rem" : "0.55rem 0.55rem 0 0"};
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

    .inputForms {
        .hasAds, .webURL, .painPoint {
            padding: calc(0.3rem + 1vh) 1rem;
        }

        .radio {
            display: flex;
            div {
                display: flex;
                margin: 0.5rem 2rem 0 0.5rem;
                input {
                    align-self: center;
                }
            }
        }

        .painPoint {
            
            textarea {
                display: block;
                margin-top: 0.5rem;
                width: 100%;
                height: 8rem;
                border: 2px solid rgba(85, 91, 112, 0.1);
                border-radius: 0.5rem;
                outline: none;
                resize: none;
                overflow: auto;
            }
        }
    }

    .dropDown {
        background-image: url(${props => props.isHidden ? dropDown: goUp});
        :hover {
            background-image: url(${props => props.isHidden ? dropDownHover: goUpHover});
            top: ${props => props.isHidden ? "0.8rem": "0.5rem" };
        }
    }

    .inputForms {
        display: ${props => props.tobeHidden};
    }
`
const Div = styled.div`
    display: ${props => props.tobeHidden ? "none" : "block"};
`
const StyledRadio = styled(FormsRadio)`
`

export const PainPointsForm = ({ register, errors, isSubmit }) => {
    const toggle = UseFormToggleHandel()
    const hiddenState = UseFormHiddenState()

    const radio = pagesData.forms.clientsNeeds.hasAds
    const url = pagesData.forms.clientsNeeds.webURL
    const pp = pagesData.forms.clientsNeeds.painPoint

    const fieldName = Object.keys(pagesData.forms.clientsNeeds)
    fieldName.shift()
    const errorsArray = Object.keys(errors)
    const validStatus = validedSubmit(isSubmit, errorsArray, fieldName)

    return (
        <StyledFormWrapper isHidden={!hiddenState} validStatus={validStatus}>
            <StyledTitle className='ads' isHidden={!hiddenState}>{pagesData.forms.clientsNeeds.title}</StyledTitle>
            <div className='validIcon' />
            <IconDropDown onClick={toggle}/>
            <Div className="inputForms" tobeHidden={!hiddenState}> 
                <StyledRadio 
                    type={radio.type}
                    fieldName={radio.id}
                    label={radio.question}
                    radioValueArray={radio.answer}
                    register={register}
                    errors={errors}
                    isSubmit={isSubmit}
                    isRequired={true}
                    reminder={radio.ErrMes}
                />
                <FormsInput 
                    type={url.webURL}
                    fieldName={url.id}
                    label={url.question}
                    placeHolder={url.placeholder}
                    register={register}
                    errors={errors}
                />
                <FormsTextarea 
                    type={pp.type}
                    fieldName={pp.id}
                    label={pp.question}
                    placeHolder={pp.placeholder}
                    register={register}
                    errors={errors}
                    isRequired={true}
                    maximLength={300}
                    minimLength={3}
                    reminder={pp.ErrMes}
                    patternReminder={pp.remainingWords}
                />
            </Div>
        </StyledFormWrapper>
    )
}