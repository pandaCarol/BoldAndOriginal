import React from "react";
import styled from "styled-components";
import { defaultTitle } from "../../css/cssDefault";
import { stringRemoveSpaceFirstLetterLowercase } from "../../functions/stringFormat";


const TitleWrapper = styled(defaultTitle)`
`
export const FormsTitle = ({ className, children }) => {
    return (
        <TitleWrapper className={className}>
            {children}
        </TitleWrapper>
    )
}

export const FormsInput = ({ inputType, fieldName, register, errors, placeHolder, isRequired, maximLength, minimLength }) => {

    return (
        <div className={stringRemoveSpaceFirstLetterLowercase(fieldName)}>
            <input 
                type={inputType} 
                id={fieldName} 
                placeholder={placeHolder} 
                {...register(fieldName, {
                    required: {
                        value: isRequired,
                        message: "This is required"
                    },
                    maximLength: {
                        value: maximLength,
                        message: `must be maximum ${maximLength}`
                    },
                    minLength: {
                        value: minimLength,
                        message: `must be maximum ${minimLength}`
                    }
                })}
            />

            <p>{errors[fieldName] && errors[fieldName].message}</p>
        </div>
    )
}



