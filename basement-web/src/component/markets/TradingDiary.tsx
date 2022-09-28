// @ts-ignore
import gamepad from '../../assets/svg/gamepad-solid.svg';
import React, {useEffect, useState} from 'react';
import ProfileBar from "../navigation/ProfileBar";
import {useTheme} from "../../theme/useTheme";
import ThemeSelector from "../../ThemeSelector";
import {faEye, faMessage} from "@fortawesome/free-solid-svg-icons";

import {
    addLinkToComponent,
    changeBackground,
    constructAFreakingNavItem,
    reverseBackground
} from "../../util/componentUtils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FolderLabel from "./FolderLabel";

function TradingDiary() {
    const {theme, themeLoaded, getFonts} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);
    const [backgroundImage, setBackgroundImage] = useState<string>("hacker");

    useEffect(() => {
        setSelectedTheme(theme);
        // setBackgroundImage(backgroundImageMap[theme.id]);
    }, [themeLoaded]);

    return (
        <>
            <div
                className="markets-insight"
                // style={{height: '100vh', background: 'green'}}
            >
                <div style={{height: '10vh'}}>
                    <ProfileBar homePage={false} theme={selectedTheme.colors} children={<ThemeSelector setter={ setSelectedTheme }/>} currentPage='markets'/>
                    {/*<ProfileBar homePage={false} theme={}/>*/}
                    <h1 className="pixel d-flex" style={{color: theme.colors.text}}>Trading Diary</h1>
                </div>
                <div className="centre pixel typewriter" style={{height: '90vh', width: '35vw'}}>
                    <FolderLabel currentTab="trading diary"/>
                    <h5 style={{display: 'overflow', color: theme.colors.text}}>
                        hello, welcome to JD's trading simulation reflection... please pick an icon below for an example trading simulation.
                        <br/>
                        <br/>
                        <table style={{border: '1px solid red', width: '35vw', backgroundColor: 'black'}}>
                            <tr>
                                <th>trading date</th>
                                <th>PnL</th>
                                <th>view</th>
                            </tr>

                            <tr style={{backgroundColor: 'red'}}>
                                <td>5 Sep 2022</td>
                                <td>++</td>
                                <td>{addLinkToComponent(`trading-diary/05-09-2022`, theme, (<FontAwesomeIcon icon={faEye} style={{color: theme.colors.text}}/>))}</td>
                            </tr>

                        </table>

                    </h5>


                </div>


            </div>
        </>
    );
}

export default TradingDiary;
