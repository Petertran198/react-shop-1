import React from 'react'
import './menu-item.scss';

const MenuItem = ({title}) => {
    return (
        <div className="menu-item">
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="title">Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem