import React from 'react'
import { Link } from 'react-router-dom'
interface LinkFace{
  name:string;
  path:string
  onClose: (isOpen:false)=>void

}
const NavLink:React.FC<LinkFace >= (props) => {
  return (
    <Link onClick={props.onClose.bind(undefined,false)} to={props.path}>{props.name}</Link>
  )
}

export default NavLink