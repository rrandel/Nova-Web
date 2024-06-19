import Discord from '../../assets/discordicon.svg'

const Footer = () => {
  return (
    <footer className="bg-darkMode-primaryBackground">
        <div className="max-w-md px-4 py-12 mx-auto overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
                <div className="px-5 py-2">
                    <a href="/" className="text-base text-gray-400 hover:text-gray-300">Home</a>
                </div>
                <div className="px-5 py-2">
                    <a href="/about" className="text-base text-gray-400 hover:text-gray-300">About</a>
                </div>
                <div className="px-5 py-2">
                    <a href="/docs" className="text-base text-gray-400 hover:text-gray-300">Docs</a>
                </div>
                <div className="px-5 py-2">
                    <a href="https://www.patreon.com/Astrixsm" className="text-base text-gray-400 hover:text-gray-300">Patreon</a>
                </div>
            </nav>
            <div className="flex justify-center mt-8 space-x-6">
                <a href="https://discord.gg/RDUvXDqKB3" target="_blank" className="text-gray-400 hover:text-gray-300">
                    <span class="sr-only">Discord</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.54 2h-15.08C3.69 2 3 2.68 3 3.52v16.96C3 21.32 3.69 22 4.46 22h10.32l-.48-1.68 1.32 1.22 1.38-1.22 2.4 1.68H19.54C20.31 22 21 21.32 21 20.48V3.52C21 2.68 20.31 2 19.54 2zm-7.79 17.6h-2.94v-2.06h2.94v2.06zm3.68-3.3c0 .96-.77 1.72-1.71 1.72H8.59c-.94 0-1.71-.76-1.71-1.72V8.48c0-.96.77-1.72 1.71-1.72h5.13c.94 0 1.71.76 1.71 1.72v7.82zM12 8.94a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm3.25-2.25c0 .62-.51 1.12-1.13 1.12h-5.24a1.13 1.13 0 010-2.25h5.24c.62 0 1.13.51 1.13 1.13z"/>
                    </svg>
                </a>
                <a href="#Instagram" target="_blank" className="text-gray-400 hover:text-gray-300">
                    <span class="sr-only">Instagram</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="#Twitter" target="_blank" className="text-gray-400 hover:text-gray-300">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                </a>
                <a href="https://github.com/rrandel" target="_blank" className="text-gray-400 hover:text-gray-300">
                    <span class="sr-only">Github</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <p className="mt-8 text-base text-center text-gray-400">
                © 2024 Robert Randel, All rights reserved.
                <br></br>
                Website built using
                <a href="https://tailwindcss.com/"> Tailwindcss </a>
                and
                <a href="https://postcss.org/"> Postcss.</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer;