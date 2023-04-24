import React from "react";
import styled from "styled-components";
import { defaultButton } from "../../css/cssDefault";

const SubmitButton = styled(defaultButton)`
    border: 3px solid rgba(224, 220, 217, 0.5);
    :hover {
        cursor: pointer;
        border: 2px solid black;
        text-transform: uppercase;
    }
`

export const IconSubmit = ({content, onClick, className}) => {
    return (
        <SubmitButton className={className} onClick={onClick} >{content}</SubmitButton>
    )
}