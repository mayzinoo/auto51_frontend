import React,{} from 'react';
import '../Components/inputfield.css';
const Input = (props) => {
    return (
        <div className="input-component">
            <div className="input" style={ props.headerbold ? { fontWeight: 'bold' } : { fontWeight: 'normal' } }> {Array.isArray(props.header)? props.header.map((item)=> { return item }) : props.header } </div>
            <div className="input">
                <span><i className={props.icon}></i>  </span>
                <input 
                    id={props.id}
                    name={props.name}
                    placeholder={props.placeholder}
                    type={props.type} 
                    value={props.value}
                    min={props.min}
                    max={props.max}
                    step={props.step}
                    onChange={props.onChange} 
                    onClick={props.onClick} 
                    required={props.required === true? "required" : ""}
                    disabled={props.disabled}
                    checked={props.checked}
                    accept={props.accept}
                    multiple={props.multiple}
                    defaultValue={props.defaultValue}
                    ></input>
            </div>
        </div>
    )
}

export default Input;