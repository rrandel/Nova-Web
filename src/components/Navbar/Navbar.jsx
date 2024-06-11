import brainwave from "../../assets/brainwave-symbol.svg";
import DarkModeIcon from './DarkModeIcon';
import LightModeIcon from './LightModeIcon';
import useDarkMode from "../../hooks/useDarkMode";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
        <div className="top-0 z-50 w-full md:sticky text-darkMode-mainText bg-darkMode-primaryBackground border-2 border-darkMode-primaryBorder border-b-2 border-b-darkMode-secondaryBorder">
            <div x-data="{ open: false }" className="flex flex-col max-w-full px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between p-4">
                    <a href="/" className="flex text-darkMode-mainText transition duration-1000 ease-in-out group">
                        <img src={brainwave} className="transition-opacity h-9 w-9 group-hover:opacity-50 group-focus:opacity-70" alt="Nova Engine Logo" />
                        <div className="mt-1 ml-3 text-xl font-black tracking-tight uppercase transition-colors text-darkMode-mainText group-hover:text-darkMode-hoverIcon"> Nova Engine</div>
                    </a>
                </div>
                <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                    <a className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-darkMode-mainText hover:bg-darkMode-hoverBackground" href="/" title="Home">Home</a>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-darkMode-mainText hover:bg-darkMode-hoverBackground" href="/about" title="About">About</a>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-darkMode-mainText hover:bg-darkMode-hoverBackground" href="/docs" title="Docs">Docs</a>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-darkMode-mainText hover:bg-darkMode-hoverBackground" href="https://www.patreon.com/Astrixsm" title="Patreon">Patreon</a>
                    <button onClick={toggleDarkMode} type="button" className={`p-2 text-sm rounded-lg md:ml-2 focus:outline-none focus:ring-4 transition-colors duration-200 ${isDarkMode ? 'dark:bg-darkMode-primaryBackground dark:text-darkMode-inactiveText dark:hover:bg-darkMode-hoverIcon focus:ring-darkMode-secondaryBorder' : 'bg-darkMode-primaryBackground text-lightMode-secondaryText hover:bg-darkMode-hoverIcon focus:ring-lightMode-primaryBorder'}`}>
                        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;