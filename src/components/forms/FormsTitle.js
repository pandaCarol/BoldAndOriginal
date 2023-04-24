import React from "react";
import styled from "styled-components";
import { FormTitles } from "../../css/cssDefault";
import { DropDown } from "../icons/dropdown";


const TitleWrapper = styled(FormTitles)`
`

export const FormsTitle = ({ className, children, onClick}) => {
    return (
        <TitleWrapper className={className} onClick={onClick}>
            {children}
        </TitleWrapper>
    )
}

//******************************************************

const StyledTitle = styled(FormsTitle)`
    background-color: #EBD134;
    border-radius: ${props => (props.isHidden || props.submitted) ? "0.55rem" : "0.55rem 0.55rem 0 0"};
`
export const Titles = ({className, title, onClick, dropdownDisplay}) => {
    return (
        <StyledTitle className={className} onClick={onClick}>
            {title}
            <div className='validIcon' />
            <DropDown toDisplay={dropdownDisplay}/>
        </StyledTitle>
    )
}
