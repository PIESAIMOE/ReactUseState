import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDark = () => {
        document.querySelector("body").setAttribute("theme", "dark");
        localStorage.setItem("seletedTheme","dark");
    }
    const setLight= () => {
        document.querySelector("body").setAttribute("theme", "light");
        localStorage.setItem("seletedTheme","light");
    }
    const seletedTheme = localStorage.getItem("seletedTheme");
    if(seletedTheme === "dark"){
        setDark();
    }

    const toogleTheme = (e)=>{
        if(e.target.checked) setDark();
        else setLight();
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toogleTheme}
                defaultChecked={seletedTheme === "dark"}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;