import React, { useState } from 'react'

import InputField from '../InputField/InputField.component'


import './header.component.css'

const Header: React.FC = () => {
  const [search, setSearch] = useState<string | null>('')
  return (
    <div className="header-container">
      <h1>User List</h1>
      <InputField value={search || ''} onChange={(value) => setSearch(value)} />
    </div>
  )
}

export default Header
