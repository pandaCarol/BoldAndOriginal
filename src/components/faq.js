import styled from "styled-components"
import { defaultSection, defaultsText, defaultSubTitle, defaultUl } from "../css/cssDefault"

import answer from '../imgs/icon/answer.svg';

const ItemsWrapper = styled(defaultSection)`
`
const Question = styled(defaultSubTitle)`
    background-color: #E7B75F;
    border-radius: 1.5rem;
    line-height: 2.5rem;
    padding: 0 2rem;
    margin-block: 0;
    font-weight: 500;
`
const Answer = styled(defaultsText)`
    padding: 0 4rem;
`
const AnswerWrapper = styled.div`
    margin-bottom: calc(0.5rem + 1vh);
    position: relative;
    
    &&:before {
        position: absolute;
        content: '';
        top: 1rem;
        left: 2rem;
        height: 1.5rem;
        width: 1.5rem;
        background-image: url(${answer});
        background-repeat: no-repeat;
        background-size: contain;
    }
`
const Wrapper = styled.div`
    height: 50vh;
    overlay: hidden;
`

export const FAQContent = ({lists}) => {
    const faqLists = lists.map((list, index) => {
        const answers = list.answer.map((item, index) => {
            return (
                <Answer key={index}>{item}</Answer>
            )
        })

        return (
            <ItemsWrapper key={index}>
                <Question>{list.question}</Question>
                <AnswerWrapper>{answers}</AnswerWrapper>
            </ItemsWrapper>
        )
    })

    return (
        <Wrapper>
            {faqLists}
        </Wrapper>
    )
}