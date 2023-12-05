import React from 'react'
// import './Content.css'

export const Content = ({children}) => {
  return (
    <div className='content' style={{backgroundImage: "url('https://www.microfertisa.com.co/wp-content/uploads/2022/10/8.png')"}}>
      {children}
    </div>
  )
}
