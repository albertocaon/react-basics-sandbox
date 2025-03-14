import './App.css';
import ParentToChild from "./components/ParentToChild/ParentToChild";
import DefaultHeader from "./components/DefaultHeader/DefaultHeader";

function App() {
  return (
    <div className="App">
      <div className="md:flex">
        <ul
          className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li>
            <a href="#"
               className="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600"
               aria-current="page">
              React Welcome
            </a>
          </li>
          <li>
            <a href="#"
               className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              ParentToChild
            </a>
          </li>
          <li>
            <a href="#"
               className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              Hooks
            </a>
          </li>
          <li>
            <a href="#"
               className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
              Effects
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center px-4 py-3 text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 w-full dark:bg-gray-800 dark:text-gray-500">
              Provider & Context
            </a>
          </li>
        </ul>
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">React Welcome</h3>
          <DefaultHeader/>
        </div>

        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">React Welcome</h3>
          <ParentToChild />
        </div>

        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">React Welcome</h3>
          <DefaultHeader/>
        </div>

        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">React Welcome</h3>
          <DefaultHeader/>
        </div>

        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">React Welcome</h3>
          <DefaultHeader/>
        </div>
      </div>
    </div>
  );
}

export default App;
