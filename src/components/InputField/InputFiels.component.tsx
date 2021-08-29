import React from 'react'

interface InputFieldProps {
  height?: Number,
}

const InputField: React.FC<InputFieldProps> = ({ height }) => {
  return (
    <div className="input-container">
      <input type="text" />
    </div>
  )
}

export default InputField
