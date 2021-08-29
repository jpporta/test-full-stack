import React from 'react'


import './InputField.component.css'

interface InputFieldProps {
  height?: number,
}

const InputField: React.FC<InputFieldProps> = ({ height = 48 }) => {
  return (
    <div className="input-container" style={{ height }}>
      <input type="text" placeholder="Search..." />
    </div>
  )
}

export default InputField
