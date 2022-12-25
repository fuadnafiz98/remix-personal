export default function Index() {
  return (
    <div className="mt-12 mx-12 md:mx-48 lg:mx-64 md:mt-16 text-white">
      <div className="hidden my-12 md:flex md:justify-between">
        <ul className="flex justify-start space-x-8 flex-1">
          <li className="text-lg font-medium py-3 px-6 hover:bg-gray-800 rounded-lg">
            Home
          </li>
          <li className="text-lg font-medium py-3 px-6 hover:bg-gray-800 rounded-lg">
            Projects
          </li>
          <li className="text-lg font-medium py-3 px-6 hover:bg-gray-800 rounded-lg">
            Resume
          </li>
          <li className="text-lg font-medium py-3 px-6 hover:bg-gray-800 rounded-lg">
            Info
          </li>
        </ul>
        <button className="p-2 rounded-lg text-center bg-gray-800">BTN</button>
      </div>
      <div className="flex flex-col md:flex-row md:justify-start md:mt-16">
        <div className="h-24 w-24 rounded-full bg-green-300"></div>
        <div className="ml-1 mt-4 md:mt-0 md:ml-8">
          <h1 className="text-3xl font-bold">Muhtasim Fuad</h1>
          <h2 className="text-lg font-medium text-gray-100">
            Full Stack Developer
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            Full stack developer with expertise in Node.js and Python ecosystem.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-bold border-b-2 py-1 border-gray-700">
          Projects
        </h2>
        <div className="mt-6">
          <div className="flex flex-col">
            <div className="h-40 w-full bg-gray-600 rounded-lg"></div>
            <div className="flex flex-col mt-6">
              <h3>Title of the Project</h3>
              <h4>Description...</h4>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex flex-col">
            <div className="h-40 w-full bg-gray-600 rounded-lg"></div>
            <div className="flex flex-col mt-6">
              <h3>Title of the Project</h3>
              <h4>Description...</h4>
            </div>
          </div>
        </div>
        <div>
          <h3>Load More...</h3>
        </div>
      </div>
    </div>
  );
}
