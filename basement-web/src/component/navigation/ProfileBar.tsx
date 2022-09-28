import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import React, {useEffect, useRef, useState} from "react";
import {faFish, faHouseChimney, faPalette, faDungeon, faArrowTrendUp} from "@fortawesome/free-solid-svg-icons";
import { changeBackground, reverseBackground } from "../../util/componentUtils";
import { ITheme } from "../../style/colorsAndThemes";
import ReactTooltip from "react-tooltip";

interface ProfileBarProps {
    homePage: boolean;
    theme: ITheme;
    children: any;
    currentPage?: string;
}

export function makeIcon(selectedIcon: any, theme?: ITheme, selectedStyle?: any, homeIcon?: boolean, children?: any) {
    const defaultStyle = {float: 'right', width: '30px', position: 'relative', display: 'flex', whiteSpace: 'normal'}

    return (
        <FontAwesomeIcon
            className={selectedIcon == faPalette ? "d-flex tooltip" : "d-flex"}
            style={selectedStyle ? selectedStyle : defaultStyle}
            icon={selectedIcon}
            onMouseOver={(e) => {
                changeBackground(e, theme.textBg)
            }}
            onMouseLeave={reverseBackground}
            onClick={(e) => {
                console.log(e)}}
            data-tip
            data-for={(selectedIcon == faPalette) ? "clickme" : ""}
            data-event={(selectedIcon == faPalette) ? "click" : ""}
        />
    )
}

const ProfileBar = ({homePage, theme, children, currentPage}: ProfileBarProps) => {
    return (
        <div style={{paddingTop: '3vh', paddingRight: '3vh', color: theme.text}}>
            <Link to="/" style={{color: theme.text}}>
                {makeIcon(faHouseChimney, theme, {float: 'right', width: '30px', display: homePage === true ? 'none' : ''})}
            </Link>
            <Link to={`/register`}
                  className="pixel"
                  onMouseOver={(e) => {
                      changeBackground(e, theme.textBg)
                      // constructTooltip('Register');
                      // setClose(false)
                  }}
                  onMouseLeave={reverseBackground}
                  style={{maxHeight: '20px', color: theme.text, display: currentPage === 'register' ? 'none' : ''}}
            >
                {makeIcon(faFish, theme)}
            </Link>
            {makeIcon(faPalette, theme)}
            {makeIcon(faDungeon, theme)}

            <Link to={`/markets`}
                  className="pixel"
                  onMouseOver={(e) => {
                      changeBackground(e, theme.textBg)
                      // constructTooltip('Register');
                      // setClose(false)
                  }}
                  onMouseLeave={reverseBackground}
                  style={{maxHeight: '20px', color: theme.text, display: currentPage === 'markets' ? 'none' : ''}}
            >
                {makeIcon(faArrowTrendUp, theme)}
            </Link>

            <ReactTooltip
                id="clickme"
                place="bottom"
                effect='solid'
                clickable={true}
                backgroundColor={theme.textBg}
                textColor={theme.text}
            >
                {children}
            </ReactTooltip>

        </div>
    )
}

export default ProfileBar;
