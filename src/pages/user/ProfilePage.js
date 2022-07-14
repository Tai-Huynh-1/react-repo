import React from 'react'
import { createBrowserHistory } from 'history'
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const history = createBrowserHistory();
  const location = useLocation()

  console.log('history', history)
  console.log('location', location)
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage