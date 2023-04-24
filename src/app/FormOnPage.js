import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { defaultSection } from "../css/cssDefault";

import { IconSubmit } from "../components/buttons/submit";
import { FormsTitle } from "../components/forms/FormsTitle";

import pagesData from "../data/pagesData.json";
import { UserForm } from "../components/subComponents/usersForm";
import { PainPointsForm } from "../components/subComponents/painPointsForm";
import { HiddenWrapper } from "../components/hooks";
import { useState } from "react";
import { Checkbox } from "../components/forms/checkboxProtocol";
import { ConfirmInfo } from "../components/forms/submittedConfirm";

const Wrapper = styled.div`
    height: 100%;
    margin: calc(3rem + 1vh) calc(1rem + 1vw) 0;
    text-align: center;

    .confirmInfo {
        display: ${props => props.submitted ? 'block' : 'none'};
    }

    .checkboxWrapper {
        display: ${props => props.submitted ? 'none' : 'block'};
    }

    .formSubmit {
        width: 50%;
        border: 3px solid rgba(224, 220, 217, 1);
        margin-top: calc(1rem + 1vh);
        color:  ${props => props.submitted ? "gray" : "black"};
        :hover {
            cursor: ${props => props.submitted ? "default" : "pointer"};
            border: ${props => props.submitted ? "3px solid rgba(224, 220, 217, 1)" : "none"};
            text-transform: ${props => props.submitted ? "none" : "uppercase"};
        }
    }

    .protocol {
        padding: calc(0.1rem + 0.5vh) calc(0.5rem + 0.5vw);
        display: inline;
    }

    .checkbox {
        display: ${props => props.submitted ? "none" : "block"};
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

        label {
            :hover {
                cursor: pointer;
            }
        }

    }
    
`

const FormsWrapper = styled(defaultSection)`
    width: 40vw;
    height: 85%;
    align-self: flex-end;
    background-color: white;
    overflow-Y: scroll;
`
const StyledTitle = styled(FormsTitle)`
    font-size: 1.25rem;
    font-weight: 500;
    text-align: left;
    color: rgb(0,0,0);
    margin: 0 0.5vw;
`

const StyledSubTitle = styled(FormsTitle)`
    font-size: 1rem;
    font-weight: 400;
    margin-block calc(0.5rem + 0.5vh);
    text-align: left;
    margin: 0 0.5vw;
`
const StyledSubmit = styled(IconSubmit)`
`
const painpointsContent = pagesData.forms.clientsNeeds
const userInfo = pagesData.forms.clientsInfo
const userInfoTitle = userInfo.title.onPage

export const FormsComponents = () => {
    const [verified, setVerified] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(data) {
        if (!submitted) {
            console.log(data);
            setSubmitted(true);
        }
    }

    function handelOnClick() {
        setVerified(true);
    }

    useEffect(() => {
        setTimeout(()=>{
            setVerified(false)
        }, 5000)
    }, [verified])

    
    return (
        <FormsWrapper>
            <Wrapper submitted={submitted}>
                <StyledTitle className="title">{pagesData.forms.onPage.title}</StyledTitle>
                <StyledSubTitle className="subtitle">{pagesData.forms.onPage.subTitle}</StyledSubTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <HiddenWrapper>
                        <div className="inputForms">
                            <HiddenWrapper >
                                <UserForm 
                                    register={register} errors={errors} 
                                    contents={userInfo} title={userInfoTitle} formHidden={true}
                                    verified={verified} submitted={submitted}
                                />
                                <PainPointsForm 
                                    register={register} errors={errors} 
                                    contents={painpointsContent} title={painpointsContent.title} formHidden={true}
                                    verified={verified} submitted={submitted}
                                />
                                <Checkbox 
                                    register={register} errors={errors} 
                                    verified={verified} 
                                />
                                <ConfirmInfo 
                                    className="confirmInfo" contents={pagesData.forms.confirm} 
                                    confirm={submitted}
                                />
                                <StyledSubmit 
                                    className="formSubmit" content='Submit' 
                                    onClick={handelOnClick} 
                                />
                            </HiddenWrapper>
                        </div>
                    </HiddenWrapper>
                </form>
            </Wrapper>  
        </FormsWrapper>
    )
}