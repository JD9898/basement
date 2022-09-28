export const THEME_COLORS = {
    TS_PINK: '#feb4cf',
    TS_BLUE: '#69b4de',
    TS_DARK_BLUE: '#608ca4',
    HACKER_BLK: '#000000',
    HACKER_GRN: '#20c20e',
    HACKER_BLU: '#1913d2',
}

// export const THEME_ID = {
//     TS_LOVER: "TS_LOVER",
// }

// export interface IThemeColors {
//     body: string;
//     text: string;
//     button:
// }

export interface ITheme {
    // id: string;
    body: string;
    text: string;
    textBg?: string;
    button?: any;
    link?: any;
}

export const THEME_LOVER = {
    // id: THEME_ID.TS_LOVER,
    background: THEME_COLORS.TS_PINK,
    stroke: THEME_COLORS.TS_BLUE,
    strokeBg: THEME_COLORS.TS_DARK_BLUE
}

export const THEME_HACKER = {
    background: THEME_COLORS.HACKER_BLK,
    stroke: THEME_COLORS.HACKER_GRN,
    strokeBg: THEME_COLORS.HACKER_BLU,
}

