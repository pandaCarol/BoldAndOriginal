import React from "react";
import styled from "styled-components";
import { FormTitles } from "../../css/cssDefault";
import { DropDown } from "../icons/dropdown";

import dropDown from '../../imgs/forms/dropDown.svg';
import dropDownHover from '../../imgs/forms/dropDownHover.svg';
import goUpHover from '../../imgs/forms/goUpHover.svg';
import goUp from '../../imgs/forms/goUp.svg';
import valid from '../../imgs/forms/valid.svg';


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
const Wrapper = styled.div`
    background-color: #EBD134;
    border-radius: ${props => (props.isHidden || props.submitted) ? "0.55rem" : "0.55rem 0.55rem 0 0"};

    :hover {
        .dropDown {
            background-image: url(${props => props.isHidden ? dropDownHover: goUpHover});
            top: ${props => props.isHidden ? "0.8rem": "0.5rem" }; 
        }
    }

    @keyframes unValid {
        0%   {transform: rotate(0deg);}
        20%   {transform: rotate(2deg);}
        40%  {transform: rotate(0deg);}
        60%   {transform: rotate(-2deg);}
        80%  {transform: rotate(0deg);}
        100% {transform: rotate(2deg);}
    }
    animation-name: ${props => props.validStatus === -1 ? "unValid": "none"};
    animation-duration: 0.25s;
    animation-iteration-count: 3;
    animation-timing-function: ease-in-out;
    h2 {
        color: ${props => props.validStatus === -1 ? "#e91640": "#555B70"};
    }

    .dropDown {
        background-image: url(${props => props.isHidden ? dropDown: goUp});
        display: ${props => props.submitted ? "none" : "block"};
    }

    .validIcon {
        display:  ${props => props.validStatus === 1 ? "block": "none"};
        position: absolute;
        content: '';
        background-repeat: no;
        background-size: contain;
        width: 1.25rem;
        height: 1.25rem;
        top: 0.8rem;
        right: 35%;
        background-image: url(${valid});
    }
`

const StyledTitle = styled(FormsTitle)`
    :hover {
        height: ${props => props.submitted ? "default" : "3rem"};
        cursor: ${props => props.submitted ? "default" : "pointer"};
    }
`

export const Titles = ({className, title, onClick, dropdownDisplay, isHidden, submitted, validStatus}) => {
    return (
        <Wrapper 
            className={className} onClick={onClick} 
            isHidden={isHidden} submitted={submitted} validStatus={validStatus}
        >
            <StyledTitle>{title}</StyledTitle>
            <div className='validIcon' />
            <DropDown toDisplay={dropdownDisplay}/>
        </Wrapper>
    )
}
