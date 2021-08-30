import React from 'react'


import './InputField.component.css'

interface InputFieldProps {
  height?: number,
  label?: string,
  value: string,
  placeholder?: string,
  width?: number,
  onChange: (arg: string | null) => void,
}

const InputField: React.FC<InputFieldProps> = ({ height = 48, width = 300, label, value, onChange, placeholder = 'Search...' }) => {
  const handleChange: React.ChangeEventHandler = (e) => {
    onChange((e.target as HTMLInputElement).value)
  };
  return (
    <div>
      {label && <p>{label}</p>}
      <div className="input-container" style={{ height, width }}>
        <input type="text" placeholder={placeholder} value={value} onChange={handleChange} />
      </div>
    </div>
  )
}

export default InputField
