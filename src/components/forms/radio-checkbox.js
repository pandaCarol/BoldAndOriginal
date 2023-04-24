import React from "react";
import styled from "styled-components";
import { getPattern } from "../../functions/getPattern";
import { FormLabel, FormInputs, FormDivs, FormReminder } from "../../css/cssDefault";

const Labels = styled(FormLabel)``
const Inputs = styled(FormInputs)``
const Wrapper = styled(FormDivs)``
const Reminder= styled(FormReminder)``

export const FormsRadio = ({ type, fieldName, label, radioValueArray, register, reminder, errors, isRequired, patternReminder }) => {
    const radiosBlock = radioValueArray.map(item => {
        return (
            <div key={item} className={fieldName+item}>
                <Labels htmlFor={item} className='labels'> {item} </Labels>
                <Inputs
                    className='inputs'
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
        <Wrapper className={fieldName}>
            <Labels >{label}</Labels>
            <div className={type}>
                 {radiosBlock}
            </div>
            <Reminder>{errors[fieldName] && errors[fieldName].message}</Reminder>
        </Wrapper>
    )
}

