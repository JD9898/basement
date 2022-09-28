// @ts-ignore
import gamepad from '../../assets/svg/gamepad-solid.svg';
import React, {useEffect, useState} from 'react';
import ProfileBar from "../navigation/ProfileBar";
import {useTheme} from "../../theme/useTheme";
import ThemeSelector from "../../ThemeSelector";
import FolderLabel from "./FolderLabel";
import {addLinkToComponent} from "../../util/componentUtils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

function TradingStrategy() {
    const {theme, themeLoaded} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme(theme);
        // setBackgroundImage(backgroundImageMap[theme.id]);
    }, [themeLoaded]);

    return (
        <>
            <div className="markets-insight">
                <div style={{height: '10vh'}}>
                    <ProfileBar homePage={false} theme={selectedTheme.colors} children={<ThemeSelector setter={ setSelectedTheme }/>} currentPage='markets'/>
                    <h1 className="pixel d-flex" style={{color: theme.colors.text}}>Trading Reflection</h1>
                </div>

                <div className="centre pixel typewriter" style={{height: '90vh', width: '35vw'}}>
                    <FolderLabel currentTab="trading strategy"/>
                    <h5 style={{color: theme.colors.text}}>
                        hello, welcome to JD's trading strategies... In here, you can find JD's day trading methodologies and its suitable
                        scenario, pros and cons and historical PNL...
                        <br/>
                        <br/>
                        <table style={{border: '1px solid red', width: '35vw', backgroundColor: 'black'}}>
                            <tr>
                                <th>trading strategy</th>
                                <th>scenario</th>
                                <th>PnL</th>
                                <th>view</th>
                            </tr>

                            <tr style={{backgroundColor: 'red'}}>
                                <td>short-term trading</td>
                                <td>price fluctuates within a thin layer</td>
                                <td>***</td>
                                <td>{addLinkToComponent(`trading/us-cpi`, theme, (<FontAwesomeIcon icon={faEye} style={{color: theme.colors.text}}/>))}</td>
                            </tr>

                            <tr>
                                <td>technical analysis refinement</td>
                                <td>when price movement </td>
                                <td>***</td>
                                <td>{addLinkToComponent(`trading/fomc-meeting`, theme, (<FontAwesomeIcon icon={faEye} style={{color: theme.colors.text}}/>))}</td>
                            </tr>
                        </table>

                    </h5>
                </div>


            </div>
        </>
    );
}

export default TradingStrategy;
