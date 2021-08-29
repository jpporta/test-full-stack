import React from 'react'

import './button.component.css'

interface ButtonProps {
  disabled?: boolean,
  onClick?(): void,
  label?: string,
}

const Button: React.FC<ButtonProps> = ({ disabled = false, onClick = () => { }, label = "DEFAULT" }) => {
  return (
    <div
      className={'button' + (disabled ? ' disabled' : '')}
      onClick={() => { if (!disabled) onClick() }}
      tabIndex={0}
    >
      <h2>{label}</h2>
    </div>
  )
}

export default Button
