import React from 'react'

export const PageTitle = ({title, icon}) => {
  return (
    <h3><i className={icon} /> {title}</h3>
  )
}
