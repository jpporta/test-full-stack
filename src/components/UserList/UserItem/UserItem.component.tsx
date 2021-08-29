import React from 'react'

import { User } from '../../../common/interfaces/user.interface'

const UserItem: React.FC<{ user: User }> = ({ user }: { user: User }) => {
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.description}</div>
    </div>
  )
}

export default UserItem
