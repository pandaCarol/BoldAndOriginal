import React from "react"
import { IconsDropdown } from "../../css/cssDefault"
import styled from "styled-components"

const DropdownIcon = styled(IconsDropdown)``


export const DropDown = ({ toDisplay, onClick }) => {
    if (toDisplay) {
        return <DropdownIcon className="dropDown" onClick={onClick}></DropdownIcon>
    }
}