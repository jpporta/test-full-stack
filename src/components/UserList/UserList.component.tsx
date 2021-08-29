import React from 'react'

import UserItem from './UserItem/UserItem.component'

import { User } from '../../common/interfaces/user.interface'

import './UserList.component.css'

interface UserListProps {
  users: User[],
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id}>
          <UserItem user={user} />
        </div>
      ))}
    </div>
  )
}

export default UserList
