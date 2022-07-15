import React, { useEffect, useState } from 'react'
import { createBrowserHistory } from 'history'
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import UserCard from "../../components/user/UserCard"
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/profileUser/profileUserActions';

const ProfilePage = () => {
  const history = createBrowserHistory();
  const location = useLocation()
  const { userId } = useParams()
  const dispatch = useDispatch()
  const profileUser = useSelector(state => state.profileUser)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(({ data }) => dispatch(setUser(data)))
    .catch(err => console.log(err))
  }, [userId])


  return (
    <div>
      {profileUser && <UserCard user={profileUser} />}
    </div>
  )
}

export default ProfilePage