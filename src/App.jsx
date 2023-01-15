import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-gray">
      <div id='drum-machine' className='flex h-full w-full justify-center gap-6 items-center'>
          <div className='flex items-center gap-6 bg-gray-300'  >
            <div className='flex gap-2 border-4 border-yellow-400'>
              <div className='drum-pad bg-gray grid grid-cols-3 p-4 gap-4'>
                <p>hello2</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
              </div>
              <div className='flex flex-col p-4 border-l-4 border-white space-y-4'>
                <div className='flex gap-2'>
                  <h2>Power</h2>
                  <button className='bg-gray-400 rounded-md pl-2 pr-2'>On</button>
                </div>
                <div>
                  <h2>Audio Name</h2>
                </div>
                <div>
                  Volume bar
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
