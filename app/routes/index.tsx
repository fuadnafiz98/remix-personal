export default function Index() {
  return (
    <div className="flex justify-center">
      <div className="mt-12 mx-12 md:w-10/12 lg:w-1/2 xl:w-1/3 text-white">
        <div className="hidden my-12 md:flex md:justify-start">
          <ul className="flex justify-start space-x-8 flex-1">
            <li className="text-lg md:text-xl font-medium py-3 px-6 hover:bg-gray-800 rounded-lg">
              Home
            </li>
            <li className="text-lg md:text-xl font-medium py-3 px-6 hover:bg-gray-800 rounded-lg">
              Projects
            </li>
            <li className="text-lg md:text-xl font-medium py-3 px-6 hover:bg-gray-800 rounded-lg">
              Resume
            </li>
            <li className="text-lg md:text-xl font-medium py-3 px-6 hover:bg-gray-800 rounded-lg">
              Timeline
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row md:justify-start md:items-center md:mt-16">
          <img
            className="object-cover h-24 w-24 md:h-32 md:w-32 rounded-full"
            src="dp.jpg"
            alt="Md. Muhtasim Fuad(fuadnafiz98)"
            loading="lazy"
          />
          <div className="ml-1 mt-4 md:mt-0 md:ml-8">
            <h1 className="text-3xl md:text-4xl font-bold">Muhtasim Fuad</h1>
            <h2 className="text-lg md:text-xl font-medium text-gray-100">
              Full Stack Developer
            </h2>
            <p className="text-sm md:text-md text-gray-300 mt-2">
              Full stack developer with expertise in Node.js and Python
              ecosystem.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold border-b-2 py-1 border-gray-700">
            Projects
          </h2>
          <div className="mt-6">
            <div className="flex flex-col md:flex-row space-x-4">
              <div className="h-40 w-full md:w-40 bg-gray-600 rounded-lg"></div>
              <div className="flex flex-col mt-6 md:mt-0 md:flex-1">
                <h3>Title of the Project</h3>
                <h4>Description...</h4>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex flex-col md:flex-row space-x-4">
              <div className="h-40 w-full md:w-40 bg-gray-600 rounded-lg"></div>
              <div className="flex flex-col mt-6 md:mt-0 md:flex-1">
                <h3>Title of the Project</h3>
                <h4>Description...</h4>
              </div>
            </div>
          </div>
          <div>
            <h3>Load More...</h3>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-bold border-b-2 py-1 border-gray-700">
            Resume
          </h2>
        </div>
      </div>
    </div>
  );
}
