import React from 'react'
import './styles.css'
import Calendar from '../calendar'
import Content from '../content'

export default function Container() {
    return (
        <div className='main'>
            <div className='container'>
                <Calendar></Calendar>
                <Content>
                    <div>
                        <p>My Page</p>
                    </div>
                </Content>
            </div>
        </div>
    )
}