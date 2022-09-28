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

interface TradingSimulationProps {
    selectedTrading?: string;
}

function TradingSimulation({selectedTrading}: TradingSimulationProps) {
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
                    <FolderLabel currentTab="trading simulation"/>
                    {/*<button className="folder-bookmark pixel" style={{color: theme.colors.text, backgroundColor: theme.colors.textBg}}>*/}
                    {/*    all trades*/}
                    {/*</button>*/}
                    <h5 style={{display: selectedTrading == 'us-cpi' ? 'overflow' : 'none', color: theme.colors.text}}>
                        hello, welcome to JD's trading simulation reflection...
                        <br/>
                        trading game: {selectedTrading.replace('-', ' ')}
                        <br/>
                        <div style={{display: 'overflow', color: theme.colors.text}}>
                            <div style={{border: '1px solid red', width: '35vw'}}>
                                <ol>
                                    <li>Fed hiked 50bps. S&P 500 dropped 30 points, then rebounded to just below previous level.</li>
                                    <li>Powell said essential to bring down inflation. S&P dropped to previous low. </li>
                                    <li>Powell said a 75bps hike is not being considered. Although inflation level is still high, but since
                                    markets sentiment was that </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ol>
                            </div>

                        </div>
                    </h5>
                </div>


            </div>
        </>
    );
}

export default TradingSimulation;
