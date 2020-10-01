import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({Icon, title, isSelected}) => {
    return (
        <div className={`SidebarOption ${isSelected && "selected"}`}>
            <Icon className="sidebarOption__icon" />
            <h2 className="sidebarOption__title" >{title}</h2>
        </div>
    )
}

export default SidebarOption