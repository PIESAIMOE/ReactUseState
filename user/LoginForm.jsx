import React, { useState,useContext } from 'react';
import {AuthContext} from '../user/AuthContext';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function LoginForm() {

    const { login,selectedColor, setSelectedColor } = useContext(AuthContext);
    const[data,setData] = useState();


    const handleSubmit = (e)=> {
        e.preventDefault();
        login(data); 
        localStorage.setItem('userData', JSON.stringify(data));
        localStorage.setItem('color', JSON.stringify(selectedColor));
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
             [name]: value,
        });
    };


    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

   return (
    <div className="form">
    <form action="#" className='form_container' onSubmit={handleSubmit}>
        <h3> Login </h3>
        

        <div className="box">
            <label>Name</label>
            <input type="textbox" 
                id="name"
                name="name" 
                value={setData.value}
                placeholder="Enter Your Name" required
                onChange = {handleChange}
            />        
        </div> 
        
        <div className="box">
            <label>Email</label>
            <input type="email" 
                id="email" 
                name="email" 
                value={setData.value} 
                placeholder="Enter your Email" required
                onChange={handleChange}
                />
        </div>

        <div className="box">
            <label>Phone NO:</label>
            <PhoneInput
                placeholder="Enter phone number"
                // defaultCountry="MM"
                value={setData.value} 
                onChange={handleChange}
            />
        </div>
        <div className="box">
            <label>Address</label>
            <textarea
                id="address" 
                name="address" 
                value={setData.value} 
                onChange={handleChange}
            />
        </div>

        <div className='color'>
            <label>Choose Your Color </label>
            <input type="color" 
                id="color" 
                name="color" 
                value = { selectedColor}
                onChange={handleColorChange}
            />
        </div>
        <div className="box">
            <input type="submit" id = "login" value="Sign In "></input>
        </div>
     
    </form>
</div>
  );
}
export default LoginForm;
   