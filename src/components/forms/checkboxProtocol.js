import React, { useState } from 'react';
import pagesData from '../../data/pagesData.json';

import styled from "styled-components";
import { FormsRadio } from './radio-checkbox';
import { validedSubmit } from "../../functions/validedSubmit";
import { defaultItalics } from '../../css/cssDefault';
import { Terms } from "./terms";
import { UseFormToggleHandel } from '../hooks';

const Wrapper = styled.div`
    position: relative;
    margin-bottom: 2rem;

    label {
        color: ${props => props.isValid === -1 ? "red" : " rgb(85, 91, 112)"}
    }

    .termsTage {
        position: absolute;
        margin: 1px 2.7rem;
        left: 0;
        color: #007C97;
        text-decoration: underline;

        :hover {
            cursor: pointer;
        }
    }
`
const TermsTage = styled(defaultItalics)`
`

export const Checkbox = ({ register, errors, verified}) => {
    //display props for terms and conditions
    const hiddenToggle = UseFormToggleHandel()

    const checkboxes = pagesData.forms.dataProtocol

    const fieldName = [pagesData.forms.dataProtocol.id]
    const errorsArray = Object.keys(errors)
    const validStatus = validedSubmit(verified, errorsArray, fieldName)

    return (
        <div className='checkboxWrapper'>
            <Wrapper isValid={validStatus}>
                <FormsRadio
                    type={checkboxes.type}
                    fieldName={checkboxes.id}
                    radioValueArray={checkboxes.content}
                    register={register}
                    errors={errors}
                    isRequired={true}
                />
                <TermsTage className='termsTage' onClick={hiddenToggle}>{checkboxes.termsTage}</TermsTage>
            </Wrapper>
            <Terms />
        </div>
    )
}