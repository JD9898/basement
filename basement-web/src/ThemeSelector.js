import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import {useTheme} from './theme/useTheme';
import { getFromLS } from './util/storage';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFish, faHouseChimney, faPalette} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {makeIcon} from "./component/navigation/ProfileBar";

const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    width: 100%;
    cursor: pointer;
`;

const Wrapper = styled.li`
    padding: 48px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #000;
    list-style: none;
`;

const Container = styled.ul`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3rem;
    padding: 10px;
`;

const Header = styled.h2`
    display: flex;
    justify-content: space-around;
`;

export default (props) => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        props.newTheme &&
        updateThemeCard(props.newTheme);
    }, [props.newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = {...data, [key]:theme[key]};
        setData(updated);
    }

    const ThemeCard = props => {
        return(
            <div style={{backgroundColor: `${data[_.camelCase(props.theme.name)].colors.body}`,
                color: `${data[_.camelCase(props.theme.name)].colors.text}`,
                fontFamily: `${data[_.camelCase(props.theme.name)].font}`}} onClick={ (theme) => themeSwitcher(props.theme) }>
                    {makeIcon(faPalette, {background: `${data[_.camelCase(props.theme.name)].colors.body}`,
                    stroke: `${data[_.camelCase(props.theme.name)].colors.text}`, textBg: `${data[_.camelCase(props.theme.name)].colors.textBg}`})}
            </div>
        )
    }

    return (
        <>
            {
                themes.length > 0 &&
                themes.map(theme =>(
                    <div className="d-flex" style={{width: '5px'}}>
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    </div>
                ))
            }
        </>
    )
}