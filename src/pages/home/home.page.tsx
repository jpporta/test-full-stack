import React from 'react'
import { User } from '../../common/interfaces/user.interface';
import Button from '../../components/Button/button.component';
import Header from '../../components/Header/header.component';
import UserList from '../../components/UserList/UserList.component';

import './home.page.css'

const userList: User[] = [
  { id: "1", name: "User 1", description: "User 1 description" },
  { id: "2", name: "User 2", description: "User 2 description" },
  { id: "3", name: "User 3", description: "User 3 description" },
  { id: "4", name: "User 4", description: "User 4 description" },
  { id: "5", name: "User 5", description: "User 5 description" },
  { id: "6", name: "User 6", description: "User 6 description" },
]


const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      <UserList users={userList} />
      <Button label="LOAD MORE" disabled />
    </div>
  )
}

export default Home;