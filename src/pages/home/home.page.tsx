import React from 'react'
import { User } from '../../common/interfaces/user.interface';
import Header from '../../components/Header/header.component';
import UserList from '../../components/UserList/UserList.component';

const userList: User[] = [
  { id: "1", name: "User 1", description: "User 1 description" }
]


const Home: React.FC = () => {
  return (
    <>
      <Header />
      <UserList users={userList} />
      <div>Load More</div>
    </>
  )
}

export default Home;