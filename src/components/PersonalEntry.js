import React from 'react'

export const PersonalEntry = (props) => {
  console.log(props)

  return (
    Array.isArray(props.dataArray) ?
      props.dataArray.map(({title, description}) => (
        <div style={{backgroundColor: props.backgroundColor}} className="personalDataContainer">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      ))
      : null
  )

}