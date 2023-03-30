import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { defaultSection } from "../../css/cssDefault";

import { FormsTitle, IconSubmit } from "./FormSubcomponents";

import pagesData from "../../data/pagesData.json";
import { UserForm } from "./userInfo";
import { PainPointsForm } from "./painPointsForm";
import { FormSubmitProviders, HiddenWrapper, SubmitContents, UsecontextSubmit } from "../hooks";
import { useState } from "react";
import { Checkbox } from "./checkboxProtocol";

const Wrapper = styled.div`
    height: 100%;
    margin: calc(3rem + 1vh) calc(1rem + 1vw) 0;
    text-align: center;

    .formSubmit {
        width: 50%;
        border: 3px solid rgba(224, 220, 217, 1);
        margin-top: calc(1rem + 1vh);
        :hover {
            cursor: pointer;
            border: none;
            text-transform: uppercase;
        }
    }

    .protocol {
        padding: calc(0.1rem + 0.5vh) calc(0.5rem + 0.5vw);
    }

    .checkbox {
        text-align: left;
        width: 100%;
        div {
            display: flex;
            flex-direction: row-reverse;
            width: 100%
            text-align: left;
        }
        input {
            height: 1rem;
            width: 1rem;
            margin: 0.5rem 1rem;

            :hover {
                cursor: pointer;
                height: 1.2rem;
                width: 1.2rem;
            }
        }

    }
    
`

const FormsWrapper = styled(defaultSection)`
    width: 40vw;
    height: 85%;
    align-self: flex-end;
    background-color: white;
`
const StyledTitle = styled(FormsTitle)`
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
`


const StyledSubTitle = styled(FormsTitle)`
    font-size: 1rem;
    font-weight: 400;
    margin-block calc(0.5rem + 0.5vh);
    text-align: center;
`
const StyledSubmit = styled(IconSubmit)`
`

export const FormsComponents = () => {
    const [doseSubmit, setSubmit] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    function handelOnClick() {
        setSubmit(true);
    }

    return (
        <FormsWrapper>
            <Wrapper>
                <StyledTitle className="title">{pagesData.forms.onPage.title}</StyledTitle>
                <StyledSubTitle className="subtitle">{pagesData.forms.onPage.subTitle}</StyledSubTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <HiddenWrapper>
                        <div className="inputForms">
                            <UserForm register={register} errors={errors} isSubmit={doseSubmit}/>
                            <PainPointsForm register={register} errors={errors} isSubmit={doseSubmit}/>
                            <Checkbox register={register} errors={errors} isSubmit={doseSubmit}/>
                            <StyledSubmit className="formSubmit" content='Submit' onClick={handelOnClick}/>
                        </div>
                    </HiddenWrapper>
                </form>
            </Wrapper>    
        </FormsWrapper>
    )
}