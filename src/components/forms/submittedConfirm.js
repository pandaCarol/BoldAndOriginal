import styled from "styled-components"
import { FormTitles } from "../../css/cssDefault"

import submitted from  "../../imgs/icon/submitted.svg"

const StyledConfirm = styled(FormTitles)`
    text-align: left;
    color: #3A8B39;
    margin: 0.25vh 1vw;
    ::first-child {
        font-size: 2rem;
    }
`
const IconSubmitted = styled.div`
    position: absolute;
    content: '';
    background-repeat: no;
    background-size: contain;
    width: ${props => props.toDisplay ? '1.8rem': '0'};
    height: 1.8rem;
    bottom: -2rem;
    right: 48%;
    background-image: url(${submitted});
`

export const ConfirmInfo = ({className, contents, confirm, toDisplay }) => {
    const confirmContents = contents.map((content,index) => {
        return <StyledConfirm key={index}>{content}</StyledConfirm>
    })

    return (
        <div className={className}>
            {confirmContents}
            <IconSubmitted toDisplay={toDisplay}/>
        </div>
    )
}