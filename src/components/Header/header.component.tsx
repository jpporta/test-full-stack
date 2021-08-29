import React from 'react'

import InputField from '../InputField/InputField.component'


import './header.component.css'

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <h1>User List</h1>
      <InputField />
    </div>
  )
}

export default Header
