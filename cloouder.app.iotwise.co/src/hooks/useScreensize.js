import React from 'react'
import { useWindowSize } from '@react-hook/window-size'

export const useScreenSize = () => {
    const [screenWidth, screenHeight] = useWindowSize()
    const [screenSize, setScreenSize] = React.useState('lg')
    
    
    React.useEffect(() => {
        if (screenWidth>= 1200) setScreenSize("xl")
        else if (screenWidth>= 992) setScreenSize("lg")
        else if (screenWidth>= 768) setScreenSize("md")
        else if (screenWidth>= 576) setScreenSize("sm")
        else setScreenSize("xs")
    }, [screenWidth, screenHeight])

    return screenSize
}
