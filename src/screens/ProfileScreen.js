import React from 'react';
import "./ProfileScreen.css"
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebade';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
  const user = useSelector(selectUser)
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
           src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="" 
            />
        </div>
        <div className="profileScreen__details">
          <h2>{user.email}</h2>
          <div className="profileScreen__plans">
            <h3>plans</h3>
            <PlansScreen/>
            <button
            onClick={() => auth.signOut()}
            className="profileScreen__signOut">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen