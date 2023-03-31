import React from "react";
import styled from "styled-components";
import { defaultButton, defaultTitle, FormDivs, FormInputs, FormLabel, FormReminder, FormTextarea, FormTitles, IconsDropdown } from "../../css/cssDefault";
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

export const FormsTitle = ({ className, children, onClick}) => {
    return (
        <TitleWrapper className={className} onClick={onClick}>
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

export const IconDropDown = ({ onClick }) => {
    return <DropdownIcon className="dropDown" onClick={onClick}></DropdownIcon>
}

export const IconSubmit = ({content, onClick, className}) => {
    return (
        <SubmitButton onClick={onClick} className={className}>{content}</SubmitButton>
    )
}

export const FormsRadio = ({ type, fieldName, label, radioValueArray, register, reminder, errors, isRequired, patternReminder }) => {
    const radiosBlock = radioValueArray.map(item => {
        return (
            <div className={fieldName+item} key={item}>
                <FormLabel htmlFor={item}>{item}</FormLabel>
                <FormInput
                     type={type}
                     id={item}
                     name={fieldName}
                     value={item}
                     {...register(fieldName, {
                         required: {
                             value: isRequired,
                             message: reminder
                         },
                         pattern: {
                             value: getPattern(fieldName),
                             message: patternReminder
                         }
                    })}
                />
            </div>
        )
    })

    return (
        <FormDiv className={fieldName}>
            <FormLabel >{label}</FormLabel>
            <div className={type}>
                 {radiosBlock}
            </div>
            <Reminder>{errors[fieldName] && errors[fieldName].message}</Reminder>
        </FormDiv>
    )
}

export const FormsTextarea = ({ inputType, fieldName, label, register, reminder, errors, placeHolder, isRequired, patternReminder, maximLength, minimLength }) => {

    return (
        <FormDiv className={stringRemoveSpaceFirstLetterLowercase(fieldName)}>
            <FormLabel >{label}</FormLabel>
            <FormTextarea
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
