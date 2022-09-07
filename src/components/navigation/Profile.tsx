import React from 'react'
import classes from './Profile.module.css'
import profileImage from './../../assets/images/image-avatar.png'
const Profile = () => {
  return (
    <img className={classes.profile} src={profileImage} alt='profile'/>
  )
}

export default Profile