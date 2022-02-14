import { useContext, useState, useEffect } from "react";
import { Link } from "remix";
import { ThemeContext } from "~/context/ThemeContext";

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleToggle = () => {
        // toggle
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header className="h-auto px-[22px] lg:h-[126px]">
            <nav className="flex items-center justify-center">
                <ul className="flex text-[20px] font-semibold gap-[20px] lg:gap-[40px] uppercase py-[50px] items-center flex-wrap justify-center">
                    <li>
                        <Link to="/">Home 🏠</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects 💻</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog 📗</Link>
                    </li>
                    <li>
                        {theme === "light" ? (
                            <section onClick={handleToggle}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-moon"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                                </svg>
                            </section>
                        ) : (
                            <section onClick={handleToggle}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-brightness-down"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <line
                                        x1="12"
                                        y1="5"
                                        x2="12"
                                        y2="5.01"
                                    ></line>
                                    <line
                                        x1="17"
                                        y1="7"
                                        x2="17"
                                        y2="7.01"
                                    ></line>
                                    <line
                                        x1="19"
                                        y1="12"
                                        x2="19"
                                        y2="12.01"
                                    ></line>
                                    <line
                                        x1="17"
                                        y1="17"
                                        x2="17"
                                        y2="17.01"
                                    ></line>
                                    <line
                                        x1="12"
                                        y1="19"
                                        x2="12"
                                        y2="19.01"
                                    ></line>
                                    <line
                                        x1="7"
                                        y1="17"
                                        x2="7"
                                        y2="17.01"
                                    ></line>
                                    <line
                                        x1="5"
                                        y1="12"
                                        x2="5"
                                        y2="12.01"
                                    ></line>
                                    <line x1="7" y1="7" x2="7" y2="7.01"></line>
                                </svg>
                            </section>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
