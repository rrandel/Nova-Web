import brainwave from "../../assets/brainwave-symbol.svg";
import DarkModeIcon from './DarkModeIcon';
import LightModeIcon from './LightModeIcon';
import useDarkMode from "../../hooks/useDarkMode";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="top-0 z-50 w-full text-gray-200 bg-lightMode-primary dark:bg-darkMode-primary border-2 border-lightMode-accent dark:border-darkMode-accent md:sticky">
        <div x-data="{ open: false }" className="flex flex-col max-w-full px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
                <a href="/" className="flex text-gray-100 transition duration-1000 ease-in-out group">
                    <img src={ brainwave } className="transition-opacity h-9 w-9 group-hover:opacity-50 group-focus:opacity-70" alt="Nova Engine Logo" />
                    <div className="mt-1 ml-3 text-xl font-black tracking-tight text-gray-100 uppercase transition-colors group-hover:text-gray-400/60"> Nova Engine</div>
                </a>
            </div>
            <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                <a className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-orange-600 focus:bg-orange-700 focus:outline-none focus:shadow-outline" href="/" title="Home">Home</a>
                <a className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-orange-600 focus:bg-orange-700 focus:outline-none focus:shadow-outline" href="/about" title="About">About</a>
                <a className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-orange-600 focus:bg-orange-700 focus:outline-none focus:shadow-outline" href="/docs" title="Docs">Docs</a>
                <a className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-orange-600 focus:bg-orange-700 focus:outline-none focus:shadow-outline" href="#Patreon" title="Patreon">Patreon</a>
                <a className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-orange-600 focus:bg-orange-700 focus:outline-none focus:shadow-outline" href="#Milanote Board" title="Milanote Board">Milanote Board</a>
                <button onClick={toggleDarkMode} type="button" className={`p-2 text-sm rounded-lg md:ml-2 focus:outline-none focus:ring-4 transition-colors duration-200 ${isDarkMode ? 'bg-gray-900 text-gray-300 hover:bg-gray-600 focus:ring-gray-600' : 'bg-gray-900 text-gray-100 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-200'}`}>
                    {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </button>
            </nav>
        </div>
    </div>
    );
};

export default Navbar;