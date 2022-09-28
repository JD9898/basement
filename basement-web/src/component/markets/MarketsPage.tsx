// @ts-ignore
import gamepad from '../../assets/svg/gamepad-solid.svg';
import React, {useEffect, useState} from 'react';
import ProfileBar from "../navigation/ProfileBar";
import {useTheme} from "../../theme/useTheme";
import ThemeSelector from "../../ThemeSelector";
import {
    faGamepad,
    faMessage,
    faHandHoldingDollar,
    faCalculator,
    faLightbulb,
    faChalkboard, faChartLine, faBook
} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {ITheme} from "../../style/colorsAndThemes";
import {styles} from "../../style/styles";
import {Link} from "react-router-dom";
import {
    changeBackground,
    constructAFreakingNavItem,
    constructDesktopNavItem,
    reverseBackground
} from "../../util/componentUtils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function MarketsPage() {
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
                className="markets"
                // style={{height: '100vh', background: 'green'}}
            >
                <div style={{height: '10vh'}}>
                    <ProfileBar homePage={false} theme={selectedTheme.colors} children={<ThemeSelector setter={ setSelectedTheme }/>} currentPage='markets'/>
                    {/*<ProfileBar homePage={false} theme={}/>*/}
                    <h1 className="pixel d-flex" style={{color: theme.colors.text}}>Markets</h1>
                </div>
                <div className="centre pixel typewriter" style={{height: '90vh', width: '35vw'}}>
                    <h5 className="" style={{color: theme.colors.text, zIndex: '0', paddingTop: '8vh', display: 'fixed', overflow: 'auto'}}>
                        {/*hello, welcome to JD's shady basement bank... here is a place where you can keep track for a few asset classes JD is currently interested in...*/}
                        {/*but also key takeaway and reflection on her trade simulation on real-life events such as Russia-Ukraine crisis and FOMC meetings... and also finance*/}
                        {/*notes on jargons and markets insights... what are you interested in today?*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*...*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        <div className="d-flex" style={{color: theme.stroke}}>
                            {constructDesktopNavItem('asset classes', faHandHoldingDollar, selectedTheme.colors)}
                            {constructDesktopNavItem('trading reflection', faCalculator, selectedTheme.colors)}
                            {constructDesktopNavItem('takeaway', faLightbulb, selectedTheme.colors)}
                            {constructDesktopNavItem('trading strategy', faChartLine, selectedTheme.colors)}
                            {constructDesktopNavItem('trading diary', faBook, selectedTheme.colors)}
                        </div>
                    </h5>
                </div>


            </div>
        </>
    );
}

export default MarketsPage;
