import styled from "styled-components";
//import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

export const Container = styled.div`
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

    text-align: center;
    font-weight: 400;
    font-size: 16px;

    & button, h1, h2, h3, p, ul, li, input, label {
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

    div {
        text-align: left;
    }

`

/* CSS Forms */
export const FormTitles = styled.h2`
    margin-block: 0;
    border-radius: 0.55rem 0.55rem 0 0;
    padding: 0.5rem 1rem;
    font-weight: 400;
    font-size: 1.15rem;
    text-align: left;
    color: #555B70;
    position: relative;
`
export const FormDivs = styled.div`
    padding: calc(0.3rem + 1vh) 3rem;
    position: relative;

    ::before{
        position: absolute;
        content: '';
        background-repeat: no;
        background-size: contain;
        width: 1.25rem;
        height: 1.25rem;
        top: calc(0.5rem + 1vh);
        left: 1rem;
    }
`
export const FormInputs = styled.input`
   border: none;
   font-size: 1rem;
   border-bottom: 2px solid rgba(85, 91, 112, 0.5);
   width: 100%;

   :focus {
        outline: 1px solid rgba(224, 220, 217, 0.25);
        background-color: rgba(224, 220, 217, 0.25);
   }
`

export const FormReminder = styled.p`
    margin-block: 0;
    color: red;
    font-size: 0.75rem;
`
export const IconsDropdown = styled.div`
    position: absolute;
    content: '';
    background-repeat: no;
    background-size: contain;
    width: 1.25rem;
    height: 1.25rem;
    top: 0.65rem;
    right: 1.5rem;

    :hover {
        cursor: pointer;
        top: 0.5rem;
    }
`
export const FormLabel = styled.label`
`