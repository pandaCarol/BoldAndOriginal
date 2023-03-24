import styled from "styled-components";
//import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

export const Container = styled.div`
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

    text-align: center;
    font-weight: 400;
    font-size: 16px;

    & button, h1, h2, h3, p, ul, li {
        font-family: 'Alata', sans-serif;
        box-sizing: border-box;
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
    margin: auto 1rem;
    height: 36px;
    background: white;
    border: none;
`

export const defaultSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const defaultTitle = styled.h2`
`
export const defaultSubTitle = styled.h3`
`
export const defaultsText = styled.p`
`
export const pageTitle = styled.h1`
    margin-left: calc(1rem + 2vw);
`
export const defaultUl = styled.ul`
`
export const defaultLi = styled.li`
`
export const defaultForm = styled.form`
    border: 3px solid rgba(224, 220, 217, 0.5);
    border-radius: 0.75rem;
    margin: 0 calc(0.1rem + 1vw);
    padding: 0.5rem 1rem;

    div {
        text-align: left;
    }

`