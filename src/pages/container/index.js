import React, { useState } from 'react'
import './styles.css'
var moment = require('moment');

const initialState = ()=>{
    function getDay(n){
        const weekDay = moment().add(n, 'days').format('dddd')
        return weekDay.slice(0, 3).toUpperCase()
    }

    function getDate(n){
        return moment().add(n, 'days').date()
    }
    return [
        { id: '1', number: moment().date(), day: 'TODAY' },
        { id: '2', number: getDate(1), day: getDay(1) },
        { id: '3', number: getDate(2), day: getDay(2) },
        { id: '4', number: getDate(3), day: getDay(3) },
        { id: '5', number: getDate(4), day: getDay(4) },
        { id: '6', number: getDate(5), day: getDay(5) },
        { id: '7', number: getDate(6), day: getDay(6) },
        { id: '8', number: getDate(7), day: getDay(7) },
    ]
}

export default function Container() {
    const [days, setDays] = useState(initialState)
    
    return (
        <div className='main'>
            <div className='container'>
                <div className="row">
                    {days.map(item =>
                        <div className='item' key={item.id}>
                            <h2>{item.number}</h2>
                            <h4>{item.day}</h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}