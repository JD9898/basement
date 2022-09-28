// @ts-ignore
import bookOpenSolid from '../../assets/svg/bookOpenSolid.svg';
import React, {useEffect, useState} from 'react';
import ProfileBar from "../navigation/ProfileBar";
import Magazine from "./Magazine";
import {useTheme} from "../../theme/useTheme";
import ThemeSelector from "../../ThemeSelector";

function MagazinePage() {
    const {theme, themeLoaded, getFonts} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);
    const [backgroundImage, setBackgroundImage] = useState<string>("hacker");

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    return (
        <>
            <div className="magazine">
                <div style={{height: '10vh'}}>
                    <ProfileBar homePage={false} theme={selectedTheme.colors} children={<ThemeSelector setter={ setSelectedTheme } />}/>
                    <h1 className="pixel d-flex" style={{color: theme.colors.text}}>Magazine</h1>
                </div>
                <div style={{width: '90vh', height: '90vh'}}>
                    <Magazine
                        title="CONTENT"
                        content= "&quot;If you are not yelling at your kids, you are not spending enough time with them. &quot;"
                    />
                </div>

            </div>
        </>
    );
}

export default MagazinePage;
