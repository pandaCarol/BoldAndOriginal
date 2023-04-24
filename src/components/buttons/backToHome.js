import React from "react";
import styled from "styled-components";
import { defaultButton } from "../../css/cssDefault";

import backHome from "../../imgs/icon/backHome.svg";
import backHomeHover from "../../imgs/icon/backHomeHover.svg";

const ToHome = styled(defaultButton)`
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 2rem;
    border: none;
    width: 18rem;
    background-color: #C9B7A8;
    color: #555B70;

    display: ${props => props.submitted ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    :hover {
        cursor: pointer;
        color: black;
        text-transform: uppercase;

        :after {
            background-image: url(${backHomeHover});
        }
    }

    :after {
        margin-top: 0.2rem;
        margin-left: 0.2rem;
        content: '';
        height: 1.5rem;
        width: 1.5rem;
        background-size: cover;
        background-image: url(${backHome});
    }
`

export const BackToHome = ({content, onClick, className, submitted}) => {
    return (
        <ToHome className={className} onClick={onClick} submitted={submitted}>{content}</ToHome>
    )
}