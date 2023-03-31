import React from 'react';
import pagesData from '../../data/pagesData.json';

import styled from "styled-components";
import { FormsRadio } from './FormSubcomponents';
import { validedSubmit } from "../../functions/validedSubmit";

const Wrapper = styled.div`
    label {
        color: ${props => props.isValid === -1 ? "red" : " rgb(85, 91, 112)"}
    }
`

export const Checkbox = ({ register, errors, isSubmit}) => {
    const checkboxes = pagesData.forms.dataProtocol

    const fieldName = [pagesData.forms.dataProtocol.id]
    const errorsArray = Object.keys(errors)
    const validStatus = validedSubmit(isSubmit, errorsArray, fieldName)

    return (
        <Wrapper isValid={validStatus}>
            <FormsRadio
                type={checkboxes.type}
                fieldName={checkboxes.id}
                radioValueArray={checkboxes.content}
                register={register}
                errors={errors}
                isRequired={true}
            />
        </Wrapper>
        
    )


}