import "./styles.css"
import React from 'react'

function Input(props) {
    return (
        <div>
            <label for={props.name} className="form__label">{props.name}</label>
            <input id={props.id} className="form__input" type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

function TextArea(props) {
    return (
        <div>
            <label className="form__label">{props.name}</label>
            <textarea className="form__input" placeholder={props.placeholder}></textarea>
        </div>
    )
}


export {Input, TextArea}
