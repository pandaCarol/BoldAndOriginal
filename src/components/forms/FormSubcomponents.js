import React from "react";
import styled from "styled-components";
import { defaultButton, defaultTitle, FormDivs, FormInputs, FormLabel, FormReminder, FormTitles, IconsDropdown } from "../../css/cssDefault";
import { getPattern } from "../../functions/getPattern";
import { stringRemoveSpaceFirstLetterLowercase } from "../../functions/stringFormat";


const TitleWrapper = styled(FormTitles)`
`
const FormDiv = styled(FormDivs)`
`
const Reminder = styled(FormReminder)`
`
const FormInput = styled(FormInputs)`
`
const DropdownIcon = styled(IconsDropdown)`
`
const SubmitButton = styled(defaultButton)`
`

export const FormsTitle = ({ className, children }) => {
    return (
        <TitleWrapper className={className}>
            {children}
        </TitleWrapper>
    )
}

export const FormsInput = ({ inputType, fieldName, label, register, reminder, errors, placeHolder, isRequired, patternReminder, maximLength, minimLength }) => {

    return (
        <FormDiv className={stringRemoveSpaceFirstLetterLowercase(fieldName)}>
            <FormLabel >{label}</FormLabel>
            <FormInput 
                type={inputType}
                placeholder={placeHolder} 
                {...register(fieldName, {
                    required: {
                        value: isRequired,
                        message: reminder
                    },
                    pattern: {
                        value: getPattern(fieldName),
                        message: patternReminder
                    },
                    maximLength: {
                        value: maximLength,
                        message: `must be maximum ${maximLength}`
                    },
                    minLength: {
                        value: minimLength,
                        message: `must be minimum ${minimLength}`
                    }
                })}
            />

            <Reminder>{errors[fieldName] && errors[fieldName].message}</Reminder>
        </FormDiv>
    )
}

export const IconDropDown = ({iconOnClick}) => {
    return <DropdownIcon className="dropDown" onClick={iconOnClick}></DropdownIcon>
}

export const IconSubmit = ({content, onClick}) => {
    return (
        <SubmitButton onClick={onClick}>{content}</SubmitButton>
    )
}

export const FormsRadio = () => {
    
}
