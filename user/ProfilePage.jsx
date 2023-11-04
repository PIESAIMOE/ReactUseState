import React, { useContext } from 'react';
import {AuthContext} from '../user/AuthContext';

function ProfilePage() {
    const {user,logout,selectedColor} = useContext(AuthContext);
   
    return (
    <div className='profile'style = {{background: `${selectedColor}`}}>
        <div className='user_form'>
            <h2>{user.name}'s Information</h2>
            <div className='info'>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phone}</p>
                <p>Address: {user.address}</p>
            </div>
        </div>    
        <button id="logout" onClick={() => logout()}>Logout</button>
    </div>
    );
}

export default ProfilePage;