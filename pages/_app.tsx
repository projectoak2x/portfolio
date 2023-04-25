import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "styles/ThemeConfig";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  };

  useEffect(() => {
    let localTheme = window.localStorage.getItem('theme');
    if(!localTheme) localTheme = "dark";
    console.log(localTheme)
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme == "dark" ? darkTheme : lightTheme}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} toggleTheme={toggleTheme} theme={theme} />
    </ThemeProvider>
  );
}
