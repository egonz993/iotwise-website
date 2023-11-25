import React from 'react'

export const useSerialPortRecord = ({ inputRef, setInput }) => {

  const [records, setRecord] = React.useState([""])
  const [recordIdx, setRecordIdx] = React.useState(0)
  
  // Update recordIdx on keydown Arrow-Up and Arrow-Down
  React.useEffect(() => {
    const keyDownEvent = (event) => {
      if (event.key === 'ArrowUp' && recordIdx >= 0) {
        recordIdx < records.length - 1 ? setRecordIdx(recordIdx + 1) : setRecordIdx(0)
      }

      if (event.key === 'ArrowDown' && recordIdx < records.length) {
        recordIdx > 0 ? setRecordIdx(recordIdx - 1) : setRecordIdx(records.length - 1)
      }
    }

    const inputElement = inputRef.current

    if (inputElement) inputElement.addEventListener('keydown', keyDownEvent)

    return () => {
      if (inputElement) inputElement.removeEventListener('keydown', keyDownEvent)
    }

  }, [records, recordIdx, inputRef, setInput])

  // Update input recordIdx changed
  React.useEffect(() => {
    const txt = records[recordIdx - 1]
    if (txt) setInput(txt)
  }, [records, recordIdx, setInput])

  const resetRecordIdx = () => {
    setRecordIdx(0)
  }

  const pushRecord = (input) => {
    setRecord([input, ...records])
  }

  const clearRecords = () => {
    setRecord([""])
  }

  return { records, recordIdx, setRecord, resetRecordIdx, pushRecord, clearRecords }

}