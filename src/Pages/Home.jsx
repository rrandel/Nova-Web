import Astronaut from '../assets/Astronaut.png'

const Home = () => {
  return (
    <div className="bg-darkMode-surfaceBackground">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div className="grid items-center gap-8 mb-8 sm:mb-0 lg:ga-12 lg:grid-cols-12">
          <div className="col-span-6 px-4 text-center sm:mb-6 lg:text-left lg:mb-0">
            <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white"> Nova Engine </h1>
            <h2 className="pb-2 text-3xl font-light text-gray-800 dark:text-gray-300 md:text-4xl"> Interactive 3D development platform </h2>
            <p className="max-w-xl mx-auto mb-6 font-normal text-gray-900 lg:mx-0 xl:mb-2 md:text-lg xl:text-xl dark:text-gray-50"> Nova is a simple-yet-powerful 3D game engine made by Robert Randel available for use now with big plans for the future. </p>
            <div className="mt-6">
              <a href="#Patreon">
                <button type="button" className="block w-full px-5 py-3 text-xl font-medium text-white dark:bg-darkMode-primaryButtonBackground border border-transparent rounded-md shadow dark:hover:bg-darkMode-secondaryButtonBackground sm:px-10"> 
                  Get Nova 
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-6">
            <img src={Astronaut} width="100%" height alt="TailBliss Hero" className="w-full mac-w-xl mx-auto rounded-lg"></img>
          </div>
        </div>
      </div>
      <div className="relative dark:bg-darkMode-secondaryBackground">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-8 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 w-full bg-gray-50 dark:bg-gray-900/10 right-1/2 rounded-r-3xl lg:right-72"></div>
              <svg class="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392" loading="lazy">
                <defs>
                  <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-gray-900/60" fill="currentcolor"></rect>
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"></rect>
              </svg>
            </div>
            <div className="relative w-full h-auto px-4 py-6 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:py-20">
              <div className="overflow-hidden shadow-xl rounded-2x1">
                <img imgh="" src={Astronaut} width="512" height="512" class="w-full h-auto" alt="P1" loading="lazy"></img>
              </div>
            </div>
          </div>
          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
            <div className="md:pt-12 sm:pt-6 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl"> What and Why. </h2>
              <div className="mt-6 text-gray-900 dark:text-white">
                <div className="mt-6 space-y-6 text-gray-900 dark:text-white prose dark:prose-invert">
                  <p className="text-lg text-gray-900 dark:text-white">
                    Nova started back in 2024 as part of the
                    <a href="https://www.youtube.com/watch?v=JxIZbV_XjAs&list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT"> Game Engine series on YouTube </a>
                    . Nova is a 3D game engine that you can use right now to create and ship 3D games, Interactive
                    applications, artwork, etc. We created Nova because we have a real passion for making game engines,
                    we want to create and ship commercial games using our own technology. 
                  </p>
                  <p className="text-lg text-gray-900 dark:text-white"> Some features and tech: </p>
                  <ul className="pl-8 space-y-3 list-disc dark:marker:text-gray-100">
                    <li> Written in C++ with support for Windows and Linux</li>
                    <li> C# .NET Core for scripting (like Unity)</li>
                    <li> Vulkan for rendering, with an API-agnostic renderer</li>
                    <li> Multi-threaded runtime (main thread + render thread)</li>
                    <li> Physically-based forward+ HDR renderer</li>
                  </ul>
                  <p></p>
                  <p className="text-lg text-gray-900 dark:text-white">
                     Read more on the
                     <a href="/about"> About </a>
                       page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home