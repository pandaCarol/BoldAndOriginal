import React from "react";
import { useContext } from "react";
import { useState } from "react";

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