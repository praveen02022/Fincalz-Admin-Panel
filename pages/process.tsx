import type { NextPage } from 'next'
import Link from 'next/link';
import { useState } from 'react';
import { MapInteractionCSS, MapInteraction } from 'react-map-interaction';
import ReactDOM from 'react-dom';
import { menuItems } from '../components/menu';
import { items } from '../components/dragAndDrop';
import React from 'react';

const Process: NextPage = (props) => {



  const [test, setTest] = useState();
  const [htmlTag, setHtmlTag] = useState<any>();
  console.log(htmlTag);

  // const [test, setTest] = useState();
  const draging = (e: any) => {
    e.preventDefault()
    console.log("draging!");

  }
  const dragDroped = (e: any) => {
    let id = e.dataTransfer.getData('dragId')
    console.log(id, "Im dropped");
    for (const dragicon of items) {
      console.log(items);
      if (dragicon.id == id) {
        // const getElement = dragicon
        const appendElement: any = document.getElementById('global');
        const createElement = document.createElement(dragicon.htmltag);
        createElement.className = dragicon.class
        const elementContent = document.createTextNode(dragicon.content);
        createElement.appendChild(elementContent);
        appendElement.appendChild(createElement);
      }
    }
  }

  const dragStarted = (e: any, id: any) => {
    console.log("drag started", id);
    e.dataTransfer.setData("dragId", id)
  }


  return (
    <div className='h-full'>
      <div className="grid grid-cols-2 h-full">
        <div className="...">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {items.map((items: any) =>
              <div draggable onDragStart={(e) => dragStarted(e, items.id)} className='border-b p-5 border-gray-200 dark:border-gray-600' key={items.id}>
                <img src={`${items.iconPath}`} alt="" />
                <p className='text-sm mb-4 text-gray-400'>{items.name}</p>
              </div>
            )}
          </div>
          {/* <input type="text" /> */}
        </div>
        <div className="h-full">
          <MapInteractionCSS >
            <div className="flex p-10">
              <div className='shadow-lg w-52 h-40 mr-10 p-5' onDragOver={(e) => draging(e)} id="global" onDrop={(e) => dragDroped(e)}>
                {/* <h1 className='text-6xl'>1</h1> */}
  
                {/* <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div> */}
                {/* <div id="drop-target">
                  <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d={test}></path></svg>
                  </div>
                </div> */}
              </div>
              <div className='shadow-lg w-52 h-40  mr-10'>
                <h1 className='text-6xl'>2</h1>
                <input type="text" />
              </div>
              <div className='shadow-lg w-52 h-40  mr-10'>
                <h1 className='text-6xl'>3</h1>
              </div>
            </div>
          </MapInteractionCSS>
        </div>
      </div>
    </div>
  )
}
export default Process;
