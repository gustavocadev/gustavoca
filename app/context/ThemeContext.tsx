import { createContext, Dispatch, SetStateAction } from "react";

type ThemeContextType = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "",
    setTheme: () => {},
});

export { ThemeContext };
