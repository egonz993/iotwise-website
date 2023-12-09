import React from 'react'

export const useScrolltop = () => {

  React.useEffect(() => {
    console.log('scroll top')
    window.scrollTo(0, 0);
  }, [])

  return null
}
