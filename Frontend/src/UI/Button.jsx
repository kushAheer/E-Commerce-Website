import React from 'react'
import classes from './Button.module.css'
function Button(props) {
  return (
    <>
        <button className={`${classes.btn} m-0`} type='submit'>{props.children}</button>
      
    </>
  )
}

export default Button
