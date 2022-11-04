import type { NextPage } from 'next'
import { useState } from 'react';
import { MapInteractionCSS, MapInteraction } from 'react-map-interaction';
import { menuItems } from '../components/menu';

const Process: NextPage = (props) => {
  // let value: {
  //     scale: 1,
  //     translation: { x: 0, y: 0 }
  // }
 

 const [test ,setTest] = useState()

  const draging = (e:any)=>{
      e.preventDefault()
      console.log("draging!");
      
  }
  const dragDroped = (e:any) =>{    
        let id = e.dataTransfer.getData('dragId')
        console.log(id,"Im dropped");
        for( const items of menuItems) {
          console.log(items);
          if(items.id == id ){
            setTest(items.iconPath);   
          }      
        }
     
        // e.target.appendChild(document.getElementById("test"));
  }
  return (
    <div className='w-full h-full'>
      <MapInteractionCSS >
        <div className="flex p-10">
          <div className='shadow-lg w-52 h-40 mr-10' onDragOver={(e)=>draging(e)} id="test" onDrop={(e)=>dragDroped(e)}>
            <h1 className='text-6xl'>1</h1>
            <div id="drop-target">
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true"  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d={test}></path></svg>
              </div>
            </div>
          </div>
          <div className='shadow-lg w-52 h-40  mr-10'>
            <h1 className='text-6xl'>2</h1>
          </div>
          <div className='shadow-lg w-52 h-40  mr-10'>
            <h1 className='text-6xl'>3</h1>
          </div>
        </div>
      </MapInteractionCSS>
    </div>
  )
}
export default Process;
