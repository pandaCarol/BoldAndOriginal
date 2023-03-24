import React from "react";
import { useForm } from "react-hook-form";

import { FormsInput, FormsTitle } from "./FormSubcomponents";
import pagesData from '../../data/pagesData.json';
import styled from "styled-components";
import { defaultForm } from "../../css/cssDefault";

const StyledTitle = styled(FormsTitle)`
    margin-block: 0;
    border-radius: 0.75rem 0.75rem 0 0;
    padding: 0.5rem 0 1rem;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: left;
    color: #555B70;
`
const StyledForm = styled(FormsInput)`
    text-align: left;
`

const StyledFormWrapper = styled(defaultForm)`
`


export const UserForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    const infosForm = pagesData.forms.clientsInfo.infos.map(item => {
        return (
            <StyledForm key={item}
                type = "text"
                fieldName={item}
                placeHolder = {item}
                register = {register}
                errors = { errors }
                isRequired = {true}
                minimLength = { 2 }
            />
        )
    })

    return (
        <StyledFormWrapper onSubmit={handleSubmit(onSubmit)}>
            <StyledTitle className='aboutYou'>{pagesData.forms.clientsInfo.title.onPage}</StyledTitle>
            {infosForm}
            <input type="submit" value="Submit"/>
        </StyledFormWrapper>
    )
}