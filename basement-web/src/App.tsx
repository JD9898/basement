import './App.css';
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import {useTheme} from './theme/useTheme';
import {BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changeBackground, constructAFreakingNavItem, reverseBackground} from './util/componentUtils';
import { styles } from './style/styles';
import {faBookOpen, faMessage, faPenClip, faSpider, faWater} from "@fortawesome/free-solid-svg-icons";
import ProfileBar from "./component/navigation/ProfileBar";
// @ts-ignore
import logo from "../src/assets/svg/logo.svg";
import {ITheme, THEME_HACKER, THEME_LOVER} from "./style/colorsAndThemes";
import ThemeSelector from './ThemeSelector';
import MagazinePage from './component/magazine/MagazinePage';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {

    // const [theme, setTheme] = useState<ITheme>(THEME_HACKER);
    const {theme, themeLoaded, getFonts} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);
    const [backgroundImage, setBackgroundImage] = useState<string>("hacker");

    const backgroundImageMap = {"T_002": "seaWave", "T_003": "hacker"};

    useEffect(() => {
        setSelectedTheme(theme);
        setBackgroundImage(backgroundImageMap[theme.id]);
    }, [themeLoaded]);

    // useEffect(() => {
    //     window.location.reload();
    // }, [theme]);

    // 4: Load all the fonts
    useEffect(() => {
        WebFont.load({
            google: {
                families: getFonts()
            }
        });
    });

    const themeTest = {
        backgroundColor: 'green',
        color: 'red'
    }

  return (
    <>
        {
            themeLoaded && <ThemeProvider theme={ selectedTheme }>
                <GlobalStyles/>
                <Container
                    className={backgroundImage}
                    style={{fontFamily: selectedTheme.font}}>

                    <div
                        className="App"
                        style={{height: '100vh'}}
                    >
                    <ProfileBar homePage={true} theme={selectedTheme.colors} children={<ThemeSelector setter={ setSelectedTheme } />}/>
                        {/*<BrowserRouter>*/}
                        {/*    <Routes>*/}
                        {/*        <Route path="/" element={<App/>}/>*/}
                        {/*        <Route path="/magazine" element={<MagazinePage/>}/>*/}
                        {/*    </Routes>*/}
                        {/*</BrowserRouter>*/}

                        <header style={styles.header}>
                            <h1 className="pixel nav" style={{color: theme.stroke}}>BASEMENT</h1>
                            <div className="d-flex" style={{color: theme.stroke}}>
                                {constructAFreakingNavItem('blackboard', faMessage, selectedTheme.colors)}
                                {constructAFreakingNavItem('diary', faPenClip, selectedTheme.colors)}
                                {constructAFreakingNavItem('magazine', faBookOpen, selectedTheme.colors)}
                                {constructAFreakingNavItem('spider-verse', faSpider, selectedTheme.colors)}
                                {constructAFreakingNavItem('fountain', faWater, selectedTheme.colors)}
                            </div>
                        </header>
                        {/*<img src={logo} className="App-logo" alt="logo" style={{blockSize: '25vh', paddingTop: '13vh'}}/>*/}
                        <img className="dark-castle"/>
                    </div>
                </Container>
            </ThemeProvider>
        }
    </>
  );


}

export default App;
