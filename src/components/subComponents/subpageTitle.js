import React from "react";
import styled from "styled-components";

import { Logo } from "../icons/logo";
import { defaultTitle } from "../../css/cssDefault";
import { CloseBtn } from "../icons/cross-icon";

import logoColor from '../../imgs/logo/logoColor.png';

const TitleWrapper = styled.div`
    padding: 1rem 0;
    background-color: white;
    width: 100%;
    top: 0;
    z-index: 5;

    display: grid;
    grid-template-columns: 10fr auto 10fr;
`

const Title = styled(defaultTitle)``
const closeBtn = <CloseBtn />


export const SubPageTitleWrapper = ({title}) => {
    return (
        <TitleWrapper className="titleWrapper" >
                <Logo iconLink={logoColor}/>
                <Title>{title}</Title>
                {closeBtn}
        </TitleWrapper>
    )
}