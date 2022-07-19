import React from 'react'
import { useParams } from 'react-router-dom';
import UserCard from "../../components/user/UserCard"
import useProfileUser from '../../hooks/useProfileUser';

const ProfilePage = () => {
  const { userId } = useParams()
  const profileUser = useProfileUser(userId)

  return (
    <div>
      {profileUser && <UserCard user={profileUser} />}
    </div>
  )
}

export default ProfilePage