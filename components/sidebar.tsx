import Link from 'next/link';
import { menuItems } from './menu';
import { BasicStore } from '../stores';
// import Dragula from 'react-dragula';
//const Dragula = require('react-dragula');
import Draggable from 'react-draggable';
export default function Sidebar() {

    const setHeaderName = (data: any) => {
        const obj = { headerName: data }
        BasicStore.setState({ headerName: obj })
    }

    const dragStarted = (e:any,id:any) =>{
        console.log("drag started",id);
        
         e.dataTransfer.setData("dragId",id )
    }
        // const  dragulaDecorator = (left:any,right:any) => {
        //       let options = {process};
        //       console.log(options);
        //       Dragula([left,right]).on('drag', function (el:any) {
        //         el.className = el.className.replace(' animazing', '');
        //       }).on('drop', function (el:any) {
        //         setTimeout(function () {
        //           el.className += ' animazing';
        //         }, 0);
        //       });
        
        //   };
    return (
        <div>
            <div className="overflow-auto py-4 px-3 rounded dark:bg-gray-800">
                <div className="space-y-3">
                    <div>
                        <div className='border-b border-gray-200 dark:border-gray-600'>
                            <a href="#" className="flex items-center pl-2.5">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 sm:h-7 mb-8" alt="Flowbite Logo" />
                            </a>
                        </div>
                    </div>
                 
                    {menuItems.map((items: any) =>
                      
                        <div onClick={() => setHeaderName(items.name)} draggable onDragStart={(e)=>dragStarted(e,items.id)}        className='border-b border-gray-200 dark:border-gray-600' key={items.id}>
                            <Link href={items.href} >
                                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true"  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d={items.iconPath}></path></svg>
                                </div>
                            </Link>
                            <p className='text-sm mb-4 text-gray-400'>{items.name}</p>
                        </div>
                          
                        )}
                       
                </div>
            </div>
        </div>
    );
}