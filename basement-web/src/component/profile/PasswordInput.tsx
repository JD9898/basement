// Import useState hook from react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect} from "react";
import { useState } from "react";
import {useTheme} from "../../theme/useTheme";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

// Input Password Component
export default function PasswordInput() {
    // Initialize a boolean state
    const [passwordShown, setPasswordShown] = useState(false);
    const {theme, themeLoaded, getFonts} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    // Password toggle handler
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    return (
        <div>
            <input type={passwordShown ? "text" : "password"} className="pixel" style={{borderRadius: '15px', height: '4.2vh', width: '12.2vw', backgroundColor: 'black', color: theme.colors.text, font: 'pixel'}}
                   id="password" name="password"/>
            {passwordShown ? <FontAwesomeIcon icon={faEye} style={{color: theme.colors.text, marginLeft: '-25px'}} onClick={togglePassword}/> :
            <FontAwesomeIcon icon={faEyeSlash} style={{color: theme.colors.text, marginLeft: '-25px'}} onClick={togglePassword}/>}
        </div>
    );
}