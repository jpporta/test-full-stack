import React from 'react'
import { useState } from 'react'

import { User } from '../../../common/interfaces/user.interface'
import UserModal from '../../UserModal/userModal.component'

import './UserItem.component.css'

const UserItem: React.FC<{ user: User }> = ({ user }: { user: User }) => {
  const [showModal, setShowModal] = useState(false);


  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <>
      <div className="user-card" onClick={() => setShowModal(true)}>
        <div className="image-container">
          <img src={`https://source.unsplash.com/random?person&sig=${Math.random()}}/700x700`} alt={`${user.name}`} />
        </div>
        <div className="user-details">
          <h2>{user.name}</h2>
          <p>{user.description}</p>
        </div>

      </div>
      <UserModal id={user.id} closeModal={handleClose} show={showModal} />
    </>
  )
}

export default UserItem
