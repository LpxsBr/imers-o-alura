import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/colorModeProvider";

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
        infoTextColorBase: "#808080",
        generalText: "#000000"
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#ffffff",
        infoTextColorBase: "#808080",
        generalText: "#ffffff"
    }
};

function ProviderTheme(props) {
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {
    const activeTheme = React.useContext(ColorModeContext);
    console.log(activeTheme);
    return (
        <ThemeProvider theme={theme[activeTheme.mode]}>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default function _App(props) {
    return (
        <ProviderTheme>
            <MyApp {...props} />
        </ProviderTheme>
    );
};