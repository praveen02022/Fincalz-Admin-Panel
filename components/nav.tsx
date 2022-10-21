import { useRouter } from 'next/router';
import { MdWavingHand, MdNotifications, MdPerson, MdDashboard } from "react-icons/md";
import { BasicStore } from '../stores';
export default function Nav() {
         const HeaderName = BasicStore.getState().headerName;
    return (
        <div >
            <nav className="">
                <div className="container flex flex-wrap justify-between ">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <i className="fa-sharp fa-solid fa-hand-wave mr-3"><MdWavingHand className='fill-lime-500' /></i>
                        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">My {HeaderName.headerName}</span>
                    </a>
                    <div className="flex items-center">
                        <button type="button" className="text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact sales</button>
                        <button type="button" className="text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upgrade</button>
                        <i className="mr-3 fill-gray-400"><MdNotifications className='fill-gray-400 text-2xl' /></i>
                        <div className="relative inline-block text-left group items-center">
                            <div className="items-center">
                                <button type="button"
                                    className="inline-flex w-full justify-center rounded-md  border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                    id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    <img src="assets/profile.jpeg" className='"w-10 h-10 rounded-full' alt="" />
                                </button>
                            </div>
                            {/* <div className="absolute group-hover:block right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                  <div className="py-1 group-hover:block" role="none" >
                    <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem"
                      id="menu-item-1">Sign out</button>
                  </div>
                </div> */}
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
}