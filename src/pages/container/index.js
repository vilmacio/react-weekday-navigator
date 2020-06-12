import React from 'react'
import './styles.css'
import Calendar from '../calendar'
import Content from '../content'

export default function Container(props) {
    return (
        <div className='main'>
            <div className='container'>
                <Calendar></Calendar>
                <Content>
                    <div>
                        <p>My Content {props.match.params.id}</p>
                    </div>
                </Content>
            </div>
        </div>
    )
}