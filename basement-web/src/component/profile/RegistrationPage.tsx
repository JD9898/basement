import '../../App.css';
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
// @ts-ignore
import {faFish, faIdCard, faPalette} from "@fortawesome/free-solid-svg-icons";
import ProfileBar from "../navigation/ProfileBar";
import ThemeSelector from "../../ThemeSelector";
import Magazine from "../magazine/Magazine";
import {useTheme} from "../../theme/useTheme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changeBackground, reverseBackground} from "../../util/componentUtils";
import PasswordInput from "./PasswordInput";

interface RegistrationPageProps {
    title: string,
    content: any,
    // children: HTMLElement,
}

const RegistrationPage = () => {

    const ref = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const {theme, themeLoaded, getFonts} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);
    const [backgroundImage, setBackgroundImage] = useState<string>("hacker");
    const styles = {
        input: {
            textAlign: 'right',
            borderRadius: '10px'
        }
    }

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    // useLayoutEffect(() => {
    //     setWidth(ref.current.offsetWidth);
    //     setHeight(ref.current.offsetHeight);
    // }, []);

    return (
        <>
            <div className="register" style={{height: '100vh'}}>
                <div style={{height: '10vh'}}>
                    <ProfileBar homePage={false} theme={selectedTheme.colors} children={<ThemeSelector setter={ setSelectedTheme } />} currentPage="register"/>
                    <h1 className="pixel d-flex" style={{color: theme.colors.text}}> Join the Club ‍️</h1>
                </div>
                <table className="pixel centre" style={{width: '90vh', height: '12.5vh', color: theme.colors.text, marginTop: '10vh', border: '3px solid blue', paddingLeft: '26vw', borderRadius: '50px 50px 0px 0px', zIndex: '-1', backgroundColor: 'blue'}}>
                </table>
                <table className="pixel centre" style={{width: '90vh', height: '52.5vh', color: theme.colors.text, marginTop: '5vh', border: '3px solid blue', borderRadius: '0px 0px 50px 50px', zIndex: '-1', backgroundColor: 'blue'
                    // , paddingLeft: '26vw'
                }}>
                    <tr>
                        <td rowSpan={7} style={{width: '25vw'}}>
                            <FontAwesomeIcon className='fa-10x' icon={faFish} width='25vw'/>
                        </td>
                        <td style={{height: '2vh', paddingTop: '3.5vh'}}><label htmlFor="username">user name:</label></td>
                    </tr>
                    <tr>
                        <td><input className="pixel" style={{borderRadius: '15px', height: '4.2vh', width: '12.2vw', backgroundColor: 'black', color: theme.colors.text, font: 'pixel'}}
                                   type="text" id="username" name="username"/></td>
                    </tr>
                    <tr>
                        <td style={{height: '2vh'}}><label htmlFor="password">password:</label></td>
                    </tr>
                    <tr>
                        <td><PasswordInput/></td>
                    </tr>
                    <tr>
                        <td style={{height: '0.5vh'}}><label htmlFor="confirm-password">confirm password:</label></td>
                    </tr>
                    <tr>
                        <td><PasswordInput/></td>
                    </tr>
                    <tr>
                        <td style={{height: '13vh'}}>
                            <button
                                className="pixel"
                                style={{borderRadius: '15px', height: '40px', width: '80px', backgroundColor: 'black', color: theme.colors.text}}
                            >
                                submit
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default RegistrationPage;