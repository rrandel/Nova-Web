import Astronaut from '../assets/Astronaut.png'
import Me from '../assets/Picture.png'

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
                <img imgh="" src={Astronaut} width="512" height="512" className="w-full mac-w-xl mx-auto rounded-lg" alt="P1" loading="lazy"></img>
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
                    <li> Written in C++ with support for Windows</li>
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


      <div className="overflow-hidden bg-gray-200 dark:bg-darkMode-secondaryBackground sm:pt-6 lg:relative">
        <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <div className="md:mt-8">
              <div className="mt-6 mb-6 sm:max-w-xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mt-16"> How do I get Nova? </h2>
                <p className="mt-4 text-lg text-gray-900 dark:text-white">
                  Nova is currently available via Patreon to Support III level Patrons or higher, for a subscription of $10 USD per month - 
                  <strong>Patreon  is the primary way we fund this project</strong>
                  . Access remains as long as your membership is active, like a Netflix subscription. 
                </p>
                <p className="mt-4 text-lg text-gray-900 dark:text-white">
                  As Nova matures and grows, we would like to make its technology more freely available. We're already doing this by open-sourcing certain systems so they can be used by the community for other projects, such as 
                  <a href="https://github.com/rrandel/Nova-Web"> QuantumScript</a>
                  , Nova's C++ scripting engine. 
                </p>
                <p className="mt-4 text-lg text-gray-900 dark:text-white">
                  Eventually our plan is to release Nova for free, in the form of freely available pre-built binaries for all supported platforms. This means that anyone will be able to create and publish Nova games and applications for free. Nova’s source code and development branches will remain accessible through Patreon, which will enable us to continue to fund development.
                </p>
                <p></p>
                <div className="mt-6">
                  <a href="https://patreon.com/Astrixsm">
                  <button type="button" class="block w-full px-5 py-3 text-xl font-medium text-white bg-darkMode-primaryButtonBackground border border-transparent rounded-md shadow hover:bg-darkMode-secondaryButtonBackground focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500 sm:px-10">
                    Support and Get Access
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="md:py-12 sm:relative sm:mt-12 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div class="absolute inset-y-0 w-screen left-1/2 rounded-l-3xl bg-gray-50 dark:bg-darkMode-primaryBackground lg:left-80 lg:right-0 lg:w-full"></div>
              <svg class="absolute -mr-3 top-8 right-1/2 lg:left-0 lg:m-0" width="404" height="392" fill="none" viewBox="0 0 404 392" loading="lazy">
                <defs>
                  <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-darkMode-buttonText" fill="currentcolor"></rect>
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
              <img imgh="" src={Astronaut} width="753" height="548" alt="p2" class="w-full rounded-lg shadow-xl lg:h-full lg:w-auto lg:max-w-none" loading="lazy"></img>
            </div>
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
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-gray-900/60" fill="currentcolor"></rect>
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"></rect>
              </svg>
            </div>
            <div className="relative w-full h-auto px-4 py-6 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:py-20">
              <div class="overflow-hidden shadow-xl rounded-2xl">
                <img imgh="" src={Astronaut} width="1567" height="1320" class="w-full h-auto" alt="P3" loading="lazy"></img>
              </div>
            </div>
          </div>
          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
            <div className="md:pt-12 sm:pt-6 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl"> Future plans and direction.</h2>
              <div className="mt-6 text-gray-900 dark:text-white">
                <div class="mt-6 space-y-6 text-gray-900 dark:text-white">
                  <p class="text-lg text-gray-900 dark:text-white">
                    We have some serious future plans.
                  </p>
                  <p class="text-lg text-gray-900 dark:text-white">
                    Firstly, one of our primary motivations for developing Nova is using it to create and release commercial games. That means we’re dedicated to ensuring that Nova is a stable and well-made product capable of facilitating video game production end-to-end, from the very start of prototyping and pre-production to shipping and distribution.
                  </p>
                  <p class="text-lg text-gray-900 dark:text-white">
                    We also see Nova as a platform for art, education, and real-time applications. We regularly use it for <a href="https://youtu.be/5ZHh8vUcEak?t=578">math/data visualization</a>, creating interactive applications, and with our currently-in-development path tracer we’ve also been exploring offline rendering and cinematic tools for both static and moving images.
                  </p>
                  <p class="text-lg text-gray-900 dark:text-white">
                    We’ve also had the privilege to partner with some great companies in the industry, so we’re really excited for the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="relative px-1 pt-8 pb-4 lg:px-8 lg:pt-12 lg:mb-4 md:mt-12">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-darkMode-secondaryBackground dark:to-darkMode-surfaceBackground h-2/3 z-0">
          <div className="absolute inset-0 h-2/3 top-1/3"></div>
        </div>
        <div className="relative px-2 mx-auto max-w-7x1 z-10">
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tight text-primary-500 dark:text-darkMode-mainText text-lightMode-mainText sm:text-4xl"> Latest Articles </h2>
            <p className="max-w-2xl mx-auto mt-3 text-xl text-lightMode-secondaryText dark:text-darkMode-secondaryText sm:mt-4"> Development articles and videos from the team. </p>
          </div>
          <div className="mx-auto text-gray-900 max-w-7xl dark:text-gray-50 md:px-1.5">
            <div className="px-4 text-gray-900 not-prose dark:text-zinc-200">
              <div className="grid gap-4 mx-auto mt-12 mb-4 lg:max-w-none md:grid-cols-3">
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-gray-50 dark:bg-darkMode-secondaryBackground">
                  <a href="/posts/2024/plans-for-2025/">
                    <img src={Astronaut} className="object-fill overflow-hidden rounded-t-lg" width="100%" height loading="lazy" alt=""></img>
                  </a>
                  <div className="p-6">
                    <div className="flex-1">
                      <a href="/posts/2024/plans-for-2025/" className="block mt-2 text-2xl font-black text-gray-900 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-500"> Plans for 2024</a>
                      <p className="mt-3 text-base text-gray-900 dark:text-gray-300"> A look into some of the new features we'll be working on over the next year. </p>
                    </div>
                    <div className="flex pt-6 font-medium text-primary-600 dark:text-primary-100 text-md">
                      <span className="pr-2 font-black"> Tags: </span>
                      <a href="/tags/meta" className="inline-flex items-center rounded-md bg-gray-300 hover:bg-primary-200 hover:text-black px-2.5 py-0.5 text-sm font-medium text-gray-900"> Meta </a>
                    </div>
                    <div className="flex items-center mt-6">
                      <div className="flex-shrink-0">
                        <span className="sr-only">Robert Randel</span>
                        <img className="w-10 h-10 rounded-full" src={Me} alt></img>
                      </div>
                      <div className="pt-1 ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white"> Robert Randel </p>
                        <div className="flex space-x-1 text-sm text-gray-500 dark:text-white">
                          <time datetime="2024-06-10">06/10/2024</time>
                          <span aria-hidden="true">.</span>
                          <span>1 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-gray-50 dark:bg-darkMode-secondaryBackground">
                  <a href="/posts/2024/integration/">
                    <img src={Astronaut} className="object-fill overflow-hidden rounded-t-lg" width="100%" height loading="lazy" alt=""></img>
                  </a>
                  <div className="p-6">
                    <div className="flex-1">
                      <a href="/posts/2024/integration/" className="block mt-2 text-2xl font-black text-gray-900 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-500"> Integration and Automated Testing</a>
                      <p className="mt-3 text-base text-gray-900 dark:text-gray-300"> I've finally got continuous integration for Windows, with automated testing planned for the near future. </p>
                    </div>
                    <div className="flex pt-6 font-medium text-primary-600 dark:text-primary-100 text-md">
                      <span className="pr-2 font-black"> Tags: </span>
                      <a href="/tags/meta" className="inline-flex items-center rounded-md bg-gray-300 hover:bg-primary-200 hover:text-black px-2.5 py-0.5 text-sm font-medium text-gray-900"> Meta </a>
                    </div>
                    <div className="flex items-center mt-6">
                      <div className="flex-shrink-0">
                        <span className="sr-only">Robert Randel</span>
                        <img className="w-10 h-10 rounded-full" src={Me} alt></img>
                      </div>
                      <div className="pt-1 ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white"> Robert Randel </p>
                        <div className="flex space-x-1 text-sm text-gray-500 dark:text-white">
                          <time datetime="2024-06-10">06/10/2024</time>
                          <span aria-hidden="true">.</span>
                          <span>4 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-gray-50 dark:bg-darkMode-secondaryBackground">
                  <a href="/posts/2024/Me/">
                    <img src={Astronaut} className="object-fill overflow-hidden rounded-t-lg" width="100%" height loading="lazy" alt=""></img>
                  </a>
                  <div className="p-6">
                    <div className="flex-1">
                      <a href="/posts/2024/Me/" className="block mt-2 text-2xl font-black text-gray-900 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-500"> Meet Me </a>
                      <p className="mt-3 text-base text-gray-900 dark:text-gray-300"> Meet Me and see what I work on. </p>
                    </div>
                    <div className="flex pt-6 font-medium text-primary-600 dark:text-primary-100 text-md">
                      <span className="pr-2 font-black"> Tags: </span>
                      <a href="/tags/meta" className="inline-flex items-center rounded-md bg-gray-300 hover:bg-primary-200 hover:text-black px-2.5 py-0.5 text-sm font-medium text-gray-900"> Meta </a>
                    </div>
                    <div className="flex items-center mt-6">
                      <div className="flex-shrink-0">
                        <span className="sr-only">Robert Randel</span>
                        <img className="w-10 h-10 rounded-full" src={Me} alt></img>
                      </div>
                      <div className="pt-1 ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white"> Robert Randel </p>
                        <div className="flex space-x-1 text-sm text-gray-500 dark:text-white">
                          <time datetime="2024-06-10">06/10/2024</time>
                          <span aria-hidden="true">.</span>
                          <span>1 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="relative pb-16 mt-6 bg-gray-200 dark:bg-darkMode-secondaryBackground">
        <div className="max-w-md mx-auto px-7 sm:max-w-3xl lg:max-w-7xl">
          <div className="relative px-6 py-10 overflow-hidden shadow-xl bg-darkMode-primaryAccent rounded-2xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1463 360" loading="lazy">
                <rect width="1463" height="360" fill="#FF7F00" />
                <path fill="#FFA500" opacity="0.8" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"></path>
                <path fill="#FF8C00" opacity="0.7" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"></path>
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl"> Get Access to Nova </h2>
                <p className="max-w-2xl mx-auto mt-6 text-lg text-primary-100">
                  Support the development on Patreon for
                  <strong> $10 USD per month </strong>
                  , and you'll instantly get access to Nova's entire development repository and its community.
                </p>
              </div>
              <div className="mt-4">
                <a href="https://patreon.com/Astrixsm">
                  <button type="button" class="bg-gray-900 block w-full px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500 sm:px-10">
                    Get Nova
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home