import { useState } from 'react'
import { findDOMNode } from 'react-dom';
import $ from 'jquery'

function App() {
  const [play, setPlay] = useState("Q")
  
  
  $(document).ready(function(){
    $("p").click(function(event){setPlay(event.target.value)});
    console.log(play)
  });

  return (
    <div className="h-screen bg-gray">
      <div id='drum-machine' className='flex h-full w-full justify-center gap-6 items-center'>
          <div className='flex items-center gap-6 bg-gray-300'  >
            <div className='flex gap-2 border-4 border-yellow-400'>
              <div className='bg-gray grid grid-cols-3 p-4 gap-y-4 gap-x-6'>
                <p className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>Q</p>      
                <p className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>W</p>      
                <p className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>E</p>      
                <p className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>A</p>      
                <p className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>S</p>      
                <p className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>D</p>      
                <p className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>Z</p>      
                <p className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>X</p>      
                <p className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>C</p>      
              </div>
              <div className='flex flex-col justify-center p-4 border-l-4 border-white space-y-10'>
                <div className='flex justify-center gap-2'>
                  <h2>Power</h2>
                  <button id='power' className='bg-gray-400 rounded-md pl-2 pr-2'>On</button>
                </div>
                <div className='flex justify-center p'>
                  <button className='bg-gray-400 rounded-md p-2'>Audio Name</button>
                </div>
                <div>
                  <input id='volume' type="range" min="0" max="100"/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
