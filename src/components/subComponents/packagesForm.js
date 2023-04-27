import React, {useState} from "react";
import styled from "styled-components";
import { StyledFormWrapper, StyledTitle } from "./painPointsForm";
import { validedSubmit } from "../../functions/validedSubmit";


import pagesData from '../../data/pagesData.json';
import { FormsRadio } from "../forms/radio-checkbox";
import { Titles } from "../forms/FormsTitle";

const Wrapper = styled(StyledFormWrapper)`
    margin-bottom: ${props => props.submitted ? '2rem' : '1rem'};
    
    .validIcon {
        right: 3%;
    }

    .selectedPackage {
        display: ${props => props.submitted ? 'none' : 'block'};
        padding: 0;

        .radio > div {
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-end;
            margin: 1rem;
        }

        input {
            width: 0.8rem;
            margin-right: 1rem;

            :hover {
                cursor: pointer;
            }
        }

        p {
            margin:1rem 1.5rem;
        }

`
const SelectedRadio = FormsRadio
const radio = pagesData.forms.package


export const SelectedPackage = ({ register, errors, verified, submitted, formHidden}) => {
    const [hiddenState, setHiddenState] = useState(initialState);
    
   function initialState () {
        return (formHidden === true ? true : false)
   }

    const fieldName = [radio.id]
    const errorsArray = Object.keys(errors)
    const validStatus = validedSubmit(verified, errorsArray, fieldName)

    return (
        <Wrapper className="packages" isHidden={hiddenState} submitted={submitted}>
            <Titles 
                className=' packagesTitles'
                title={radio.title} dropdownDisplay={formHidden}
                isHidden={hiddenState} submitted={submitted} validStatus={validStatus}
            />
            <SelectedRadio 
                type = {radio.type}
                fieldName={radio.id}
                radioValueArray={radio.contents}
                register={register}
                errors={errors}
                isRequired={true}
                reminder={radio.ErrMes}
                submitted={submitted}
            />
        </Wrapper>
        
    )
    
}