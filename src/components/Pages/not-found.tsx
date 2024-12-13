// CREATING 404 ERROR PAGE FOR FIGMA EMPTY PAGES 

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl text-gray-700 mb-8 text-center">Oops! The page you are looking for does not exist.</h2>
      
        <a className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-colors"href={"http://localhost:3000/"}>Back to Homepage</a>
     
    </div>
  );
};

export default Custom404;
