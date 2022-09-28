import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {ITheme} from "../style/colorsAndThemes";
import {styles} from "../style/styles";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {faArrowTrendUp} from "@fortawesome/free-solid-svg-icons";
import {makeIcon} from "../component/navigation/ProfileBar";

export function changeBackground(e, colorBg) {
    e.target.style.background = colorBg;
}

export function reverseBackground(e) {
    e.target.style.background = '';
}

export const constructAFreakingNavItem = (name: string, iconType: IconDefinition, theme: ITheme) => {
    // @ts-ignore
    return (
        <div className="d-flex"
             style={styles.navItem}
        >
            <Link
                to={`/${name.replace(' ', '-')}`}
                className="pixel"
                onMouseOver={(e) => {
                    changeBackground(e, theme.textBg)
                    // constructTooltip('Register');
                    // setClose(false)
                }}
                onMouseLeave={reverseBackground}
                style={{maxHeight: '30px', color: theme.text}}
            >
                <FontAwesomeIcon icon={iconType}/>{`  ${name}`}
            </Link>
        </div>
    );

}

export const constructDesktopNavItem = (name: string, iconType: IconDefinition, theme: ITheme) => {
    // @ts-ignore
    return (
        <div className="d-flex"
             style={styles.navItem}
        >
            <Link
                to={`/${name.replace(' ', '-')}`}
                className="pixel"
                onMouseOver={(e) => {
                    changeBackground(e, theme.textBg)
                    // constructTooltip('Register');
                    // setClose(false)
                }}
                onMouseLeave={reverseBackground}
                style={{maxHeight: '60px', maxWidth: '60px', color: theme.text}}
            >
                <FontAwesomeIcon size="2x" icon={iconType}/>
                <br/>
                <div>
                    {`  ${name}`}
                </div>
            </Link>
        </div>
    );

}

export const addLinkToComponent = (linkedUrl: string, theme: ITheme, children: any) => {
    return (
        <Link to={`/${linkedUrl}`}
              className="pixel"
              onMouseOver={(e) => {
                  changeBackground(e, theme.textBg)
                  // constructTooltip('Register');
                  // setClose(false)
              }}
              onMouseLeave={reverseBackground}
        >
            {children}
        </Link>
    )
}