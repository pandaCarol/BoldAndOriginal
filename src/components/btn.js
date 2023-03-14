import styled from 'styled-components';

import { defaultButton } from '../css/cssDefault'

const LoginWrapper = styled.div`
    margin: 6px 36px;
`
const LoginBtn = styled(defaultButton)`
    margin: 0 0 6px;

    @keyframes onHover {
        from {
            height: 36px;
            box-shadow: 0px 0px rgba(33, 33, 34, 1);
            margin: 0 0 6px;
        }
        to {
            height: 42px;
            box-shadow: 0px 6px rgba(33, 33, 34, 0.5);
            margin: 0;
        }
    }

    &:hover {
        cursor: pointer;
        height: 42px;
        margin: 0;
        box-shadow: 0px 6px rgba(33, 33, 34, 0.5);
        animation: onHover 1s ease-out;
    }
`
export const ContactSale = ({ contents }) => {
    return (
        <LoginWrapper>
           <LoginBtn>{contents}</LoginBtn> 
        </LoginWrapper>  
    )
}