import React from "react"
import css from './flt.module.css'
export const Filter = ({ value, onChange }) => {
    return (<div className={css.flt}><h3>Find Contact</h3> <label>
        <input type="text" value={value} onChange={onChange}
        /> </label></div>);

}
