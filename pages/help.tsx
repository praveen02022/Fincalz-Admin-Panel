import type { NextPage } from 'next'
import Dragula from 'react-dragula';
const Help: NextPage = (props) => {


  const  dragulaDecorator = (componentBackingInstance:any) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };

  return (
    <div className='w-full h-full'>
        <div className='container' ref={dragulaDecorator}>
      <div className='bg-slate-500 p-5'>Swap me around</div>
      <div>Swap her around</div>
      <div>Swap him around</div>
      <div>Swap them around</div>
      <div>Swap us around</div>
      <div>Swap things around</div>
      <div>Swap everything around</div>
    </div>
    </div>
  )
}

export default Help;
