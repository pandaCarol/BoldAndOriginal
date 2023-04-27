import React, { useState } from "react";

import { FormsTextarea } from "../forms/textarea-Input";
import { FormsRadio } from "../forms/radio-checkbox";
import { FormsTitle, Titles } from "../forms/FormsTitle";
import { FormsInput } from "../forms/text-Inputs";

import styled from "styled-components";
import { defaultForm } from "../../css/cssDefault";
import { validedSubmit } from "../../functions/validedSubmit";


import dropDown from '../../imgs/forms/dropDown.svg';
import dropDownHover from '../../imgs/forms/dropDownHover.svg';
import goUpHover from '../../imgs/forms/goUpHover.svg';
import goUp from '../../imgs/forms/goUp.svg';
import valid from '../../imgs/forms/valid.svg';

export const StyledFormWrapper = styled(defaultForm)`
    position: relative;

    .inputForms {
        display: ${props => props.tobeHidden};
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

                    :hover {
                        cursor: pointer;
                    }
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
`
const Div = styled.div`
    display: ${props => {
        if (props.submitted) {
            return 'none'
        }
        return (props.tobeHidden ? "none" : "block")
    }};
`

export const PainPointsForm = ({ register, errors, verified, submitted, contents, title, formHidden }) => {
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

    const radio = contents.hasAds
    const url = contents.webURL
    const pp = contents.painPoint

    const fieldName = Object.keys(contents)
    fieldName.shift()
    const errorsArray = Object.keys(errors)
    const validStatus = validedSubmit(verified, errorsArray, fieldName)
    console.log(validStatus)
    
    return (
        <StyledFormWrapper className='painpoint' isHidden={hiddenState} validStatus={validStatus} submitted={submitted}>
            <Titles 
                className='ads'
                title={title} dropdownDisplay={formHidden} onClick={toggle}
                isHidden={hiddenState} submitted={submitted} validStatus={validStatus}
            />
            
            <Div className="inputForms" tobeHidden={hiddenState} submitted={submitted}> 
                <FormsRadio 
                    type={radio.type}
                    fieldName={radio.id}
                    label={radio.question}
                    radioValueArray={radio.answer}
                    register={register}
                    errors={errors}
                    isSubmit={verified}
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
                    minimLength={20}
                    reminder={pp.ErrMes}
                    patternReminder={pp.remainingWords}
                />
            </Div>
        </StyledFormWrapper>
    )
}