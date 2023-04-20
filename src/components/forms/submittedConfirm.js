import styled from "styled-components"
import { FormTitles } from "../../css/cssDefault"

const StyledConfirm = styled(FormTitles)`
    text-align: left;
    color: #3A8B39;
    margin: 0.25vh 1vw;
    ::first-child {
        font-size: 2rem;
    }
`

export const ConfirmInfo = ({className, contents, confirm}) => {
    const confirmContents = contents.map((content,index) => {
        return <StyledConfirm key={index}>{content}</StyledConfirm>
    })

    return (
        <div className={className}>
            {confirmContents}
        </div>
    )
}