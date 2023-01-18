import { useState } from 'react'

function App() {
  const [power, setPower] = useState("Off")
  const audio = new Audio()

  const togglePower = ()=> {
    (power == "Off") ? setPower("On") : setPower("Off") 
  }
  
  const playMusic = (event) => {
    console.log(event.target.innerHTML)
    if(power == "On"){
      switch(event.target.innerHTML){
        case "Q":
          audio.src = "src/music/Heater-1.mp3";
          break;
      
        case "W":
          audio.src = "src/music/Heater-2.mp3";
          break;

        case "E":
          audio.src = "src/music/Heater-3.mp3";
          break;
      
        case "A":
          audio.src = "src/music/Heater-4.mp3";
          break;
        
        case "S":
          audio.src = "src/music/Clap.mp3";
          break;
      
        case "D":
          audio.src = "src/music/Open-HH.mp3";
          break;
      
        case "Z":
          audio.src = "src/music/Kick_n_Hat.mp3";
          break;
      
        case "X":
          audio.src = "src/music/Kick.mp3";
          break;
        
        case "C":
          audio.src = "src/music/Closed-HH.mp3";  
        }
        audio.play();
      }
      else{
        // turn on drum messege
      }
    }

  return (
    <div className="h-screen bg-gray">
      <div id='drum-machine' className='flex h-full w-full justify-center gap-6 items-center'>
          <div className='flex items-center gap-6 bg-gray-300'  >
            <div className='flex gap-2 border-4 border-yellow-400'>
              <div className='bg-gray grid grid-cols-3 p-4 gap-y-4 gap-x-6'>
                <p onClick={playMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>Q</p>      
                <p onClick={playMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>W</p>      
                <p onClick={playMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>E</p>      
                <p onClick={playMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>A</p>      
                <p onClick={playMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>S</p>      
                <p onClick={playMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>D</p>      
                <p onClick={playMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>Z</p>      
                <p onClick={playMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>X</p>      
                <p onClick={playMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>C</p>      
              </div>
              <div className='flex flex-col justify-center p-4 border-l-4 border-white space-y-10'>
                <div className='flex justify-center gap-2' onClick={togglePower}>
                  <h2>Power</h2>
                  <button id='power' className='bg-gray-400 rounded-md pl-2 pr-2'>{power}</button>
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
