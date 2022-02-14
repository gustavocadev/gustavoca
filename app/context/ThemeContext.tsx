import { useEffect } from "react";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

type ThemeContextProviderType = {
    children: ReactNode;
};

type ThemeContextType = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "",
    setTheme: () => {},
});

const ThemeContextProvider = ({ children }: ThemeContextProviderType) => {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const actualTheme = localStorage.getItem("theme") ?? "light";

        if (actualTheme === "dark") {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            return;
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }

        setTheme(actualTheme);
    }, []);

    // useEffect(() => {
    //     localStorage.setItem("theme", theme);
    // }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                setTheme,
                theme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
