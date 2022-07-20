import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserCard from "../../components/user/UserCard"
import useProfileUser from '../../hooks/useProfileUser';

const ProfilePage = () => {
  const { userId } = useParams()
  const profileUser = useProfileUser(userId)

  useEffect(() => {
    console.log('useEffect is running')

    const timerId = setTimeout(() => {
      console.log('a message from the past - 5 seconds ago')
    }, 5000)

    return function cleanUp() {
      console.log('sweeping in process')
      clearTimeout(timerId)
    }
  }, [])


  if (!profileUser) {
    return <div>Checking for user</div>
  }

  return (
    <div>
      {profileUser && <UserCard user={profileUser} />}
    </div>
  )
}

export default ProfilePage