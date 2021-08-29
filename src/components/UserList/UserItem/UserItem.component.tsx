import React from 'react'

import { User } from '../../../common/interfaces/user.interface'

import './UserItem.component.css'

const UserItem: React.FC<{ user: User }> = ({ user }: { user: User }) => {
  return (
    <div className="user-card">
      <div className="image-container">
        <img src={`https://source.unsplash.com/random?person&sig=${Math.random()}}/700x700`} alt={`${user.name}`} />
      </div>
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>{user.description}</p>
      </div>
    </div>
  )
}

export default UserItem
