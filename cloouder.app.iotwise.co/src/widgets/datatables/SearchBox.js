import React, { useRef, useEffect } from 'react'

export const SearchBox = ({ filterText, handleFilterChange }) => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div className="input-group input-group-lg mb-3 col-12 col-md-4">
            <input className="form-control form-control-border border-width-2" 
                   type="text" 
                   ref={inputRef} 
                   placeholder="Search" 
                   value={filterText}
                   onChange={e => handleFilterChange(e.target.value)} />
        </div>
    )
}
