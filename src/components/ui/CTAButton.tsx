import classes from './CTAButton.module.css'
import React from 'react'
interface CTAButtonFace {
    children:React.ReactNode
    type:'button'|'submit'|'reset'
    className:string

}
const CTAButton:React.FC<CTAButtonFace> = (props) => {
  return (
    <button className={`${classes.button} ${props.className}`} type={props.type}>{props.children}</button>
  )
}

export default CTAButton