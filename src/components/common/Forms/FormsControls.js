import React from "react" 

import s from './FormControls.module.css'

export const FormControls = ({element, input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        {React.createElement(element, {...input, ...props})}
        {hasError ? <span>{meta.error}</span> : ''}
        </div>
}