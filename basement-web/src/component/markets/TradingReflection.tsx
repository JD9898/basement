// @ts-ignore
import gamepad from '../../assets/svg/gamepad-solid.svg';
import React, {useEffect, useState} from 'react';
import ProfileBar from "../navigation/ProfileBar";
import {useTheme} from "../../theme/useTheme";
import ThemeSelector from "../../ThemeSelector";
import {faEye} from "@fortawesome/free-solid-svg-icons";

import {
    addLinkToComponent,
} from "../../util/componentUtils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FolderLabel from "./FolderLabel";

function TradingReflection() {
    const {theme, themeLoaded} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

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
                    <h1 className="pixel d-flex" style={{color: theme.colors.text}}>Trading Reflection</h1>
                </div>
                <div className="centre pixel typewriter" style={{height: '90vh', width: '35vw'}}>
                    <FolderLabel currentTab="trading reflection"/>
                    <h5 style={{display: 'overflow', color: theme.colors.text}}>
                        hello, welcome to JD's trading simulation reflection... please pick an icon below for an example trading simulation.
                        <br/>
                        <br/>
                        <table style={{border: '1px solid red', width: '35vw', backgroundColor: 'black'}}>
                            <tr>
                                <th>trading name</th>
                                <th>trading date</th>
                                <th>PnL</th>
                                <th>view</th>
                            </tr>

                            <tr style={{backgroundColor: 'red'}}>
                                <td>US CPI</td>
                                <td>22 Aug 2022</td>
                                <td>++</td>
                                <td>{addLinkToComponent(`trading/us-cpi`, theme, (<FontAwesomeIcon icon={faEye} style={{color: theme.colors.text}}/>))}</td>
                            </tr>

                            <tr>
                                <td>FOMC Meeting</td>
                                <td>22 Aug 2022</td>
                                <td>-</td>
                                <td>{addLinkToComponent(`trading/fomc-meeting`, theme, (<FontAwesomeIcon icon={faEye} style={{color: theme.colors.text}}/>))}</td>
                            </tr>
                            <tr style={{backgroundColor: 'red'}}>
                                <td>Russia Ukraine Conflict</td>
                                <td>22 Aug 2022</td>
                                <td>--</td>
                                <td>{addLinkToComponent(`trading/russia-ukraine-conflict`, theme, (<FontAwesomeIcon icon={faEye} style={{color: theme.colors.text}}/>))}</td>
                            </tr>
                            {/*<tr>*/}
                            {/*    <td></td>*/}
                            {/*    <td></td>*/}
                            {/*    <td></td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*    <td></td>*/}
                            {/*    <td></td>*/}
                            {/*    <td></td>*/}
                            {/*</tr>*/}
                        </table>

                    </h5>


                </div>


            </div>
        </>
    );
}

export default TradingReflection;
