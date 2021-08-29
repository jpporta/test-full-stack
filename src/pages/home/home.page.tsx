import React from 'react'
import Button from '../../components/Button/button.component';
import Header from '../../components/Header/header.component';
import UserList from '../../components/UserList/UserList.component';
import { useGetUsers } from '../../hooks/users/useGetUsers';

import './home.page.css'

const Home: React.FC = () => {
  const users = useGetUsers();
  return (
    <div className="home-container">
      <Header />
      <UserList users={users || []} />
      <Button label="LOAD MORE" disabled />
    </div>
  )
}

export default Home;