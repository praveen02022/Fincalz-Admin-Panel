import type { NextPage } from 'next'
import { MapInteractionCSS, MapInteraction } from 'react-map-interaction';
;
const Process: NextPage = (props) => {
  // let value: {
  //     scale: 1,
  //     translation: { x: 0, y: 0 }
  // }
  return (
    <div className='w-full h-full'>
      <MapInteractionCSS >
        <div className="flex p-10">
          <div className='shadow-lg w-52 h-40 mr-10'>
            <h1 className='text-6xl'>1</h1>
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
