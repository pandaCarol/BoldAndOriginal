import styled from 'styled-components';

import { defaultButton } from '../css/cssDefault'

export const LoginWrapper = styled.div`
    display: ${props => props.display || 'block'};
    flex-direction: row-reverse;
    height: 3rem;

    &:hover {
        cursor: pointer;
    }

`
export const LoginBtn = styled(defaultButton)`
    margin: auto 1rem;

    @keyframes onHover {
        from {
            margin: 0 1rem;
            height: 1.5rem;
            box-shadow: 0 0 rgba(33, 33, 34, 1);
        }
        to {
            margin: auto 1rem;
            height: 2.5rem;
            box-shadow: 0px 0.375rem rgba(33, 33, 34, 0.5);
            margin: 0 1rem;
        }
    }

    &:hover {
        cursor: pointer;
        height: 2.5rem;
        margin: auto 1rem;
        box-shadow: 0px 0.375rem rgba(33, 33, 34, 0.5);
        animation: onHover 0.5s ease-out;
    }
`
export const ContactSale = ({ contents, display }) => {
    return (
        <LoginWrapper display={display}>
           <LoginBtn>{contents}</LoginBtn> 
        </LoginWrapper>  
    )
}