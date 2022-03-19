import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from "../appTheme"

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0]
    // [0] from Apptheme as light is holding 1st element of array in it.
    const currentTheme = AppTheme[theme]

  return (
    <div
        style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center",

        }}
    >
        <h1>Context API theme toggler</h1>
        <p>Lorem ipsum dolor sit.</p>
        <button 
            style={{
                backgroundColor: "26ae60",
                padding: "10px 150px",
                fontsize: "20px",
                color: "fff",
                border: `${currentTheme.border}`
            }}
        >Click Me</button>
    </div>
  )
}

export default HeroSection