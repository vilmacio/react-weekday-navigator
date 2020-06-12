import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './styles.css'
import initialState from '../../utils/initialState'

export default function Calendar() {
    const [days] = useState(initialState)

    return (
        <div className="row">
            {days.map(item =>
                <Link className='item' key={item.id} to={`/${item.number}`}>
                    <h2>{item.number}</h2>
                    <h4>{item.day}</h4>
                </Link>
            )}
        </div>
    )
}