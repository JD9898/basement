// @ts-ignore
import gamepad from '../../assets/svg/gamepad-solid.svg';
import React, {useEffect, useState} from 'react';
import {useTheme} from "../../theme/useTheme";
import {
    faMessage,
    faCircleXmark,
    faFish,
    faHandHoldingDollar,
    faCalculator,
    faLightbulb, faChartLine, faBook
} from "@fortawesome/free-solid-svg-icons";
import {addLinkToComponent, constructAFreakingNavItem} from "../../util/componentUtils";
import {ITheme} from "../../style/colorsAndThemes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {makeIcon} from "../navigation/ProfileBar";

interface FolderLabelProps {
    currentTab: string
}

export function FolderLabel({currentTab}: FolderLabelProps) {
    const {theme, themeLoaded} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    return (
        <>
            <h5 className="folder-label" style={{color: theme.colors.text, zIndex: '0', paddingTop: '12vh', display: 'fixed', overflow: 'auto'}}>
                <div className="d-flex" style={{color: theme.stroke}}>
                    {currentTab != 'asset classes' && constructAFreakingNavItem('asset classes', faHandHoldingDollar, selectedTheme.colors)}
                    {currentTab != 'trading reflection' && constructAFreakingNavItem('trading reflection', faCalculator, selectedTheme.colors)}
                    {currentTab != 'takeaway' && constructAFreakingNavItem('takeaway', faLightbulb, selectedTheme.colors)}
                    {currentTab != 'trading strategy' && constructAFreakingNavItem('trading strategy', faChartLine, selectedTheme.colors)}
                    {currentTab != 'trading diary' && constructAFreakingNavItem('trading diary', faBook, selectedTheme.colors)}
                    {addLinkToComponent('markets', theme, <FontAwesomeIcon icon={faCircleXmark} style={{color: theme.colors.text}}/>)}
                    {<div style={{marginLeft: '150px', marginTop: '-20px', width: '250px'}}>
                        {addLinkToComponent('trading-reflection', theme, (
                            currentTab == 'trading simulation' && <button style={{color: theme.colors.textBg, backgroundColor: theme.colors.text}}
                                    className="pixel folder-bookmark">all trades</button>))}
                    </div>}
                </div>
            </h5>
        </>
    );
}

export default FolderLabel;
