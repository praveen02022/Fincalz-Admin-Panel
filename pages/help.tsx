import type { NextPage } from 'next'
import Draggable from 'react-draggable';
const Help: NextPage = (props) => {



  return (
   <div>
       <Draggable>
        <div>We can move this text</div>
      </Draggable>
   </div>
  )
}

export default Help;
