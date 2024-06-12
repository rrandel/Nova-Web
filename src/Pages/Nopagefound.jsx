
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-darkMode-secondaryBackground">
      <h1 className="text-9xl font-bold text-gray-700 dark:text-gray-300">404</h1>
      <p className="mt-4 text-xl text-gray-700">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="mt-6 px-4 py-2 text-lg text-white bg-blue-600 rounded hover:bg-blue-700 transition"> Go back to the homepage </a>
    </div>
  );
};

export default NotFound;