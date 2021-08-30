import React from 'react'
import { useState } from 'react';
import Button from '../../components/Button/button.component';
import Header from '../../components/Header/header.component';
import UserList from '../../components/UserList/UserList.component';
import { useGetUsers } from '../../hooks/users/useGetUsers';

import './home.page.css'

const Home: React.FC = () => {
  const [search, setSearch] = useState('')

  return (
    <div className="home-container">
      <Header search={search} onSearchUpdate={(val) => setSearch(val)} />
      <UserList users={useGetUsers({ filter: { name: { contains: search } } }) || []} />
      <Button label="LOAD MORE" disabled />
    </div>
  )
}

export default Home;