import React from "react"

export const useDebounce = (callback) => {
  React.useEffect(() => {
    let timer = setTimeout(() => {
      callback()
    }, 100)

    return () => clearTimeout(timer)

    // eslint-disable-next-line
  }, [])
}
