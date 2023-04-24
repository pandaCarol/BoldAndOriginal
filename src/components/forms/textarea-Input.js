import React from "react";
import styled from "styled-components";
import { stringRemoveSpaceFirstLetterLowercase } from "../../functions/stringFormat";
import { getPattern } from "../../functions/getPattern";
import { FormLabel, FormDivs, FormTextarea, FormReminder } from "../../css/cssDefault";

const Labels = styled(FormLabel)``
const Wrapper = styled(FormDivs)``
const Reminder= styled(FormReminder)``


export const FormsTextarea = ({ inputType, fieldName, label, register, reminder, errors, placeHolder, isRequired, patternReminder, maximLength, minimLength }) => {

    return (
        <Wrapper className={stringRemoveSpaceFirstLetterLowercase(fieldName)}>
            <Labels >{label}</Labels>
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
        </Wrapper>
    )
}
