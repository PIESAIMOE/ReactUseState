import React,{useContext}  from 'react';
import { AuthContext } from '../user/AuthContext';
import LoginForm from './LoginForm';
import ProfilePage from './ProfilePage'

function AuthPage() {
    const {user} = useContext(AuthContext);


    return (
        <div> 
            {user ? <ProfilePage/> : <LoginForm/>}
        </div>        
    );
}

export default AuthPage;