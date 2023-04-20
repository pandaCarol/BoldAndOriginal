import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

/*****************FAQ useContext********************/
const ToggleContextWrapper = React.createContext();
const Toggle = React.createContext();

export function UseToggleState() {
    return useContext(ToggleContextWrapper)
}

export function UseToggleHandel() {
    return useContext(Toggle)
}

export function ToggleProviders({ children }) {
    const [isHidden, setHidden] = useState(true)

    function handelClick() {
        setHidden(previous => !previous)
    }

    return (
        <ToggleContextWrapper.Provider value={isHidden}>
            <Toggle.Provider value={handelClick}>
                { children }
            </Toggle.Provider>
        </ToggleContextWrapper.Provider>
    )
}

/*****************useForm submit hooks********************/
const UseFormWrapper = React.createContext();
const UseFormSumbmit = React.createContext();

export function UsecontextSubmit() {
    return useContext(UseFormSumbmit)
}
export function SubmitContents() {
    return useContext(UseFormWrapper)
}

export function FormSubmitProviders({ children }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    function onSubmit(data) {
        console.log(data);
    }

    return (
        < UseFormWrapper.Provider value={{ register, handleSubmit, errors }}>
            <UseFormSumbmit.Provider value={onSubmit}>
                { children }
            </UseFormSumbmit.Provider>
        </UseFormWrapper.Provider>
    )
}

/*****************forms hidden hooks********************/
const FormHiddenWrapper = React.createContext();
const FormToggle = React.createContext();

export function UseFormHiddenState() {
    return useContext(FormHiddenWrapper)
}

export function UseFormToggleHandel() {
    return useContext(FormToggle)
}

export function HiddenWrapper({ children }) {
    const [isHidden, setHidden] = useState(true)

    function handelClick() {
        setHidden(previous => !previous);
    }

    return (
        <FormHiddenWrapper.Provider value={isHidden} >
            <FormToggle.Provider value={handelClick}>
                { children }
            </FormToggle.Provider>
        </FormHiddenWrapper.Provider>
    )
}