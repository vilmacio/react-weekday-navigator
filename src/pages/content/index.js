import React from 'react'
import './styles.css'

export default function Content({children}) {
    return (
        <div className="content">
            <p>{children}</p>
        </div>
    )
}