import React from 'react';
import pagesData from '../../data/pagesData.json';

import styled from "styled-components";
import { FormsRadio } from './FormSubcomponents';
import { validedSubmit } from "../../functions/validedSubmit";

export const Checkbox = ({ register, errors, isSubmit}) => {
    const checkboxes = pagesData.forms.dataProtocol

    return (
        <FormsRadio
            type={checkboxes.type}
            fieldName={checkboxes.id}
            radioValueArray={checkboxes.content}
            register={register}
            errors={errors}
            isRequired={true}
        />
    )


}