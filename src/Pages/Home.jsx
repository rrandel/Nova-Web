import Astronaut from '../assets/Astronaut.png'

const Home = () => {
  return (
    <div className="dark:bg-darkMode-secondaryBackground bg-lightMode-secondaryBackground">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div className="grid items-center gap-8 mb-8 sm:mb-0 lg:ga-12 lg:grid-cols-12">
          <div className="col-span-6 px-4 text-center sm:mb-6 lg:text-left lg:mb-0">
            <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white"> Nova Engine </h1>
            <h2 className="pb-2 text-3xl font-light text-gray-800 dark:text-gray-300 md:text-4xl"> Interactive 3D development platform </h2>
            <p className="max-w-xl mx-auto mb-6 font-normal text-gray-900 lg:mx-0 xl:mb-2 md:text-lg xl:text-xl dark:text-gray-50"> Nova is a simple-yet-powerful 3D game engine made by Robert Randel available for use now with big plans for the future. </p>
            <div className="mt-6">
              <a href="https://www.patreon.com/Astrixsm">
                <button type="button" className="block w-full px-5 py-3 text-xl font-medium text-white bg-darkMode-primaryButtonBackground border border-transparent rounded-md shadow hover:bg-darkMode-secondaryButtonBackground sm:px-10"> 
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
      <div className="relative dark:bg-darkMode-surfaceBackground">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-8 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 w-full bg-gray-50 dark:bg-darkMode-primaryBackground right-1/2 rounded-r-3xl lg:right-72"></div>
              <svg class="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392" loading="lazy">
                <defs>
                  <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-darkMode-buttonText" fill="currentcolor"></rect>
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
                    <a className="font-semibold"> personal project ive been working on</a>
                    . Nova is a 3D game engine that you can use right now to create and ship 3D games, Interactive
                    applications, artwork, etc. We created Nova because we have a real passion for making game engines,
                    we want to create and ship commercial games using our own technology. 
                  </p>
                  <p className="text-lg text-gray-900 dark:text-white"> Some features: </p>
                  <ul className="pl-8 space-y-3 list-disc dark:marker:text-gray-100">
                    <li> Written in C++ with support for Windows and Linux</li>
                    <li> C++ for scripting (like Ureal)</li>
                    <li> Vulkan and OpenGL for rendering, with an API-agnostic renderer</li>
                    <li> Multi-threaded runtime (main thread + render thread)</li>
                    <li> Physically-based forward+ HDR renderer</li>
                  </ul>
                  <p></p>
                  <p className="text-lg text-gray-900 dark:text-white">
                     Read more on the
                     <a href="/about" className="font-semibold text-orange-400"> About </a>
                       page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-1 pt-8 pb-4 bg-transparent lg:px-8 lg:pt-12 lg:mb-4 md:mt-12">
        <div className="absolute inset-0">
          <div className="bg-gray-200 dark:bg-darkMode-secondaryBackground h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative px-2 mx-auto max-w-7x1">
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tight text-primary-500 dark:text-darkMode-mainText text-lightMode-mainText sm:text-4xl"> Latest Articles </h2>
            <p className="max-w-2xl mx-auto mt-3 text-xl text-lightMode-secondaryText dark:text-darkMode-secondaryText sm:mt-4"> Development articles and videos from the team. </p>
          </div>
          <div className="mx-auto text-gray-900 max-w-7xl dark:text-gray-50 md:px-1.5">
            <div className="px-4 text-gray-900 not-prose dark:text-zinc-200">
              <div className="grid gap-4 mx-auto mt-12 mb-4 lg:max-w-none md:grid-cols-3">
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-gray-50 dark:bg-gray-900"></div>
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-gray-50 dark:bg-gray-900"></div>
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-gray-50 dark:bg-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home