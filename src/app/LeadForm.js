import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import pagesData from "../data/pagesData.json";
import { defaultSection } from "../css/cssDefault";

import { HiddenWrapper, UseFormHiddenState } from "../components/hooks";

import { FormsTitle } from "../components/forms/FormsTitle";
import { PainPointsForm } from "../components/subComponents/painPointsForm";
import { UserForm } from "../components/subComponents/usersForm";
import { SelectedPackage } from "../components/subComponents/packagesForm";
import { Checkbox } from "../components/forms/checkboxProtocol";
import { IconSubmit } from "../components/buttons/submit";
import { ConfirmInfo } from "../components/forms/submittedConfirm";
import { CloseBtn } from "../components/icons/cross-icon";
import { BackToHome } from "../components/buttons/backToHome";
import { Logo } from "../components/icons/logo";

import logoColor from '../imgs/logo/logoColor.png';
import { SubPageTitleWrapper } from "../components/subComponents/subpageTitle";

const Wrapper = styled(defaultSection)`
    display: ${props => props.isHidden ? 'none' : 'default'};
    
    background-color: white;
    z-index: 9;
    height: auto;
    width: 100%;
    position: sticky;
    padding: 3rem auto;
    bottom: 0;

    {/*for title color*/}
    .titleWrapper {
        h2 {
            color: rgb(85, 91, 112);
            margin: auto 0;
        }
    }
    

    {/*for cross icon*/}
    &&.leadform .iconClose {
        top: 3.7rem;
        z-index: 9;

        :hover {
            top: 3.5rem;
        }
    }

    form {
        margin: 1rem auto 3rem;
        padding-bottom: 2rem;
        text-align: center;
        position: relative;
        background-color: white;
    }

    .formspart {
        display: flex;
        flex-direction: ${props => props.submitted === 1 ? 'column' : 'row'};

        .painpoint, .users, .packages {
            border-color: rgba(231, 183, 95, 1);
        }

        h2 {
            background-color: rgba(231, 183, 95, 1);
            text-align: left;
            padding-right: 3rem;
            pointer-events: none;

            .validIcon {
                right: 3%;
            }
        }
    }

    {/*for termns and conditions */};
    .checkboxWrapper {
        display: ${props => props.submitted === 1 ? 'none' : 'block'};

        > div {
            display: flex;
            justify-content: center;
        }

        i {
            position: unset;
            margin: auto 0;
            padding-left: 0.5rem;
        }

        input {
            width: 0.9rem;
            margin-right: 1rem;

            :hover {
                cursor: pointer;
            }
        }
        .protocol {
            padding: 0;
        }

        .terms {
            top: 0;
            width: auto;
            height: 70%;

            background-color:rgba(231, 183, 95, 0.9);
            padding: 2rem;

            .iconClose {
                top: 5rem;
                :hover {
                    top: 4.8rem;
                }
            }
        }
    }
    {/*for termns, checkbox and content to reverse*/};
    .checkbox > div{
        display: flex;
        flex-direction: row-reverse;
        margin: 0;
    }

    {/*for submit*/}
    .formSubmit {
        background-color: rgba(231, 183, 95, 1);
        display: ${props => props.submitted === 1 ? 'none' : 'block'};
        margin: 0 auto;
    }

    .confirmInfo {
        display: ${props => props.submitted === 1 ? 'block' : 'none'};
        h2 {
            text-align: center;
        }
    }

`

const painpointsContent = pagesData.forms.clientsNeeds
const userInfo = pagesData.forms.clientsInfo
const userInfoTitle = userInfo.title.leadForms

export const Leadform = () => {
    const isHidden = UseFormHiddenState()
    console.log(isHidden)

    const [verified, setVerified] = useState(false)
    const [submitted, setSubmitted] = useState(0)
    const { register, handleSubmit, formState: { errors } } = useForm()

    useEffect(() => {
        setTimeout(()=>{
            setVerified(false)
        }, 5000)
    }, [verified])

    function onSubmit(data) {
        if (!submitted) {
            console.log(data);
            setSubmitted(1);
        }
    }

    function handelOnClick() {
        setVerified(true);
    }

    const contents = pagesData.forms.leadForms

    return (
        <Wrapper 
            className="leadform"
            submitted={submitted} isHidden={isHidden}
        >
            <SubPageTitleWrapper title={contents.title}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formspart" submitted={submitted}>
                    <PainPointsForm 
                        register={register} errors={errors} 
                        contents={painpointsContent} title={painpointsContent.title}
                        verified={verified} submitted={submitted}
                    />
                    <div className="rightSide">
                        <SelectedPackage 
                            register={register} errors={errors}
                            verified={verified} submitted={submitted}
                        />
                        <UserForm 
                            register={register} errors={errors} 
                            contents={userInfo} title={userInfoTitle}
                            verified={verified} submitted={submitted}
                        />
                    </div>
                </div>
                <HiddenWrapper>
                    <Checkbox register={register} errors={errors} verified={verified}/>
                </HiddenWrapper>
                <ConfirmInfo 
                    className="confirmInfo" contents={pagesData.forms.confirm} 
                    submitted={submitted} toDisplay={true}
                />
                <IconSubmit 
                    className="formSubmit" content='Submit' 
                    submitted={submitted} onClick={handelOnClick}
                />
            </form>
            <BackToHome content='Back to home page' submitted={submitted}/>
        </Wrapper>
        
    )
}
