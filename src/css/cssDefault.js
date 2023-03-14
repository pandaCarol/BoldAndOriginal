import styled from "styled-components";
//import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

    text-align: center;
    font-weight: 400;
    font-size: 16px;

    & button, h2, h3, p {
        font-family: 'Alata', sans-serif;
    }

    & button {
        font-size: 16px;
    }
    
`

export const defaultButton = styled.button`
    width: 120px;
    height: 36px;
    border-radius: 24px;
    background: #FBD909;
`
export const defaultNaviButton = styled.button`
    width: 120px;
    height: 36px;
    background: white;
    border: none;

    &:first-child {
        width: 270px;
    }
`

export const defaultSection = styled.section`
    text-align: left;
`

export const defaultTitle = styled.h2`
`
export const defaultSubTitle = styled.h3`
`
export const defaultsText = styled.p`
`
