import React from 'react'

export const ProfileCard = (props) => {
  console.log(props)

  return (
      <div style={{border: `3px solid ${props.color}`}} className="profile-card-container">
        <div style={{backgroundColor: props.color}} className="profile-card-header">
          <h1>{props.name}</h1>
        </div>
        <img src={props.profileImgSrc} alt="profile-img"/>
        <div className="profile-card-data">
          <div className="profile-card-text">{props.description}</div>
        </div>
      </div>
  )
}