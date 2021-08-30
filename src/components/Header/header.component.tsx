import React from 'react'

import InputField from '../InputField/InputField.component'


import './header.component.css'

interface HeaderProps {
  search: string,
  onSearchUpdate: (search: string) => void
}

const Header: React.FC<HeaderProps> = ({ search, onSearchUpdate }) => {
  return (
    <div className="header-container">
      <h1>User List</h1>
      <InputField value={search || ''} onChange={(value) => onSearchUpdate(value || '')} />
    </div>
  )
}

export default Header
