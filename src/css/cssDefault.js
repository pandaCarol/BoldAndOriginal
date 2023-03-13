import styled from "styled-components";
//import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

    text-align: center;
    font-weight: 400;
    font-size: 20px;

    & button {
        font-family: 'Alata', sans-serif;
        font-size: 20px;
    }
    
`;

export const defaultButton = styled.button`
    width: 150px;
    height: 36px;
    border-radius: 24px;
    background: #FBD909;
`
export const defaultNaviButton = styled.button`
    width: 120px;
    height: 60px;
    background: white;
    border: none;

    &:first-child {
        width: 270px;
    }
`
