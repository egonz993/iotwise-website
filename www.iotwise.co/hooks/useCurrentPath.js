import { useRouter } from 'next/router';
import React from 'react'

export const useCurrentPath = () => {

  const [currentPath, setCurrentPath] = React.useState("")
  const router = useRouter()

  React.useEffect(() => {
    setCurrentPath(router.asPath)
  }, [router])

  return currentPath
}
