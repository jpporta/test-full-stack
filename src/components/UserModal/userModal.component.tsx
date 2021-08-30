import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useGetUser } from '../../hooks/users/useGetUser'
import { useUpdateUser } from '../../hooks/users/useUpdateUser'
import Button from '../Button/button.component'
import InputField from '../InputField/InputField.component'

import './userModal.component.css'

interface UserModalProps {
  id: string,
  closeModal(): void,
  show: boolean
}

const UserModal: React.FC<UserModalProps> = ({ id, closeModal, show }) => {
  const user = useGetUser(id)
  const [userName, setUserName] = useState<string>('')
  const [userAddress, setUserAddress] = useState<string>('')
  const [userDescription, setUserDescription] = useState<string>('')
  const updateUser = useUpdateUser();

  useEffect(() => {
    setUserName(user?.name || '')
    setUserAddress(user?.address || '')
    setUserDescription(user?.description || '')
  }, [user])

  const [coordinates, setCoordinates] = useState([0, 0, 14, 0]);
  const [mapboxURL, setMapboxURL] = useState(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/0,0,14,0}/388x352?access_token=${process.env.REACT_APP_MAPBOX_ID}`)

  useEffect(() => {
    console.log('here')
    axios.get(process.env.REACT_APP_LAMBDA_URL || '', {
      params: {
        address: userAddress,
      }
    })
      .then(res => res.data)
      .then(({ lat, lon }) => setCoordinates(c => [lat, lon, c[2], c[3]]))
  }, [userAddress])

  useEffect(() => {
    if (coordinates[0] && coordinates[1]) {
      setMapboxURL(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${coordinates[0]},${coordinates[1]},${coordinates[2]},${coordinates[3]}/388x352?access_token=${process.env.REACT_APP_MAPBOX_ID}`)
    }
  }, [coordinates])

  const handleSave = () => {
    updateUser({
      variables: {
        input: {
          id,
          address: userAddress,
          name: userName,
          description: userDescription,
        }
      }
    })
    closeModal();
  }

  return (
    <>
      {show &&
        <div className="user-modal-screen">
          <div className="user-modal-container">
            <div className="header">
              <h1>Edit User</h1>
            </div>
            <div className="content">
              <div className="map-container">
                <img
                  src={mapboxURL}
                  alt="User location"
                ></img>
              </div>
              <div className="fields-container">
                <InputField
                  value={userName}
                  onChange={(value) => setUserName(value || '')}
                  label="Name"
                  placeholder="Name"
                  width={466}
                />
                <InputField
                  value={userAddress}
                  onChange={(value) => setUserAddress(value || '')}
                  label="Address"
                  placeholder="Address"
                  width={466}
                />
                <InputField
                  value={userDescription}
                  onChange={(value) => { setUserDescription(value || '') }}
                  label="Description"
                  placeholder="Description"
                  width={466}
                />
              </div>
            </div>
            <div className="actions">
              <Button label="SAVE" onClick={handleSave} />
              <Button label="CANCEL" onClick={closeModal} />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default UserModal
