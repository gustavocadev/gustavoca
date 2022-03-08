import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix"
import type { MetaFunction } from "remix"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import { ThemeContextProvider } from "./context/ThemeContext";
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "~/context/ThemeContext"

import styles from "./tailwind.css"

export const meta: MetaFunction = () => {
  return { title: "New Remix App" }
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  const [theme, setTheme] = useState("")
  // const [themeState, setThemeState] = useState(true)

  useEffect(() => {
    const actualTheme = localStorage.getItem("theme") ?? "light"
    // actualTheme || themeState ? setTheme(actualTheme) : setTheme("light")
    setTheme(actualTheme)
    // setTheme("light")

    // setThemeState(false)
    // setTheme(actualTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#F9FAFB] text-black dark:bg-[#181818] dark:text-gray-200">
        <ThemeContext.Provider
          value={{
            theme,
            setTheme,
          }}
        >
          <Header />
          <main className="px-[22px] lg:px-[142px]">
            <Outlet />
          </main>
          {/* <Footer /> */}
        </ThemeContext.Provider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
