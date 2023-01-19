import { useEffect } from 'react'
import { useState } from 'react'
import Heater1 from "./music/Heater1.mp3"
import Heater2 from "./music/Heater2.mp3"
import Heater3 from "./music/Heater3.mp3"
import Heater4 from "./music/Heater2.mp3"
import clap from "./music/Clap.mp3"
import Open_HH from "./music/Open_HH.mp3"
import Kick_n_Hat from "./music/Kick_n_Hat.mp3"
import Kick from "./music/Kick.mp3"
import Closed_HH from "./music/Closed_HH.mp3"

function App() {
  // declaring states and audio
  const [power, setPower] = useState("Off")
  const [textBox, setTextBox] = useState("Welcome")
  const volumeElement = document.getElementById("volume");
  const audio = new Audio()
  
  // toggle power function 
  const togglePower = () => {
    if (power == "Off") {
      setPower("On")
      setTextBox("Play ")
    }
    else {
      setPower("Off")
      setTextBox("Turn on Power")
    }
  }
  
  // play music function
  
  const playMusic = (input) => {
    if (power == "On") {
      switch (input) {
        case ("Q"):
          audio.src = Heater1;
          setTextBox("Heater 1");
          break;
        case "W":
          audio.src = Heater2;
          setTextBox("Heater 2");
          break;
        case "E":
          audio.src = Heater3;
          setTextBox("Heater 3");
          break;
        case "A":
          audio.src = Heater4;
          setTextBox("Heater 4");
          break;
         case "S":
          audio.src = clap;
          setTextBox("Clap");
          break;
        case "D":
          audio.src = Open_HH;
          setTextBox("Open HH");
          break;
        case "Z":
          audio.src = Kick_n_Hat;
          setTextBox("Kick n' Hat");
          break;
        case "X":
          audio.src = Kick;
          setTextBox("Kick");
          break;
        case "C":
          audio.src = Closed_HH;
          setTextBox("Closed HH");
          break;
        }
        audio.volume = volumeElement.value / 100 
        setVolume(volumeElement.value)
        audio.play();
      }
    else {
      setTextBox("Turn on Power")
    }
  }
  
  // play music function using click
  const onClickMusic = (event) => {
    const click = event.target.innerHTML
    playMusic(click);
  }

  // play music function using key press event listener
  const keyPressMusic = (event) => {
    const key = event.key.toUpperCase()
    playMusic(key)
  }
  
  // volume change function
  const [volume, setVolume] = useState("10")
  
  const volumeControl = () => {    
    setVolume(volumeElement.value)
  }

    const onKeyPress = () => {
      if(power == "On"){
        window.addEventListener('keydown', keyPressMusic)
        return () => {window.removeEventListener('keydown', keyPressMusic); }
      }
      else{
        setTextBox("Turn on Power")
      }
    }

    // use effect hook
    // useEffect(onVolumeChange, []);
    useEffect(onKeyPress, [power]);

    return (
      <div className="h-screen bg-gray">
        <div id='drum-machine' className='flex h-full w-full justify-center gap-6 items-center'>
          <div className='flex items-center gap-6 bg-gray-300'  >
            <div className='flex gap-2 border-4 border-yellow-400'>
              <div className='bg-gray grid grid-cols-3 p-4 gap-y-4 gap-x-6'>
                <p onClick={onClickMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>Q</p>
                <p onClick={onClickMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>W</p>
                <p onClick={onClickMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>E</p>
                <p onClick={onClickMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>A</p>
                <p onClick={onClickMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>S</p>
                <p onClick={onClickMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>D</p>
                <p onClick={onClickMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>Z</p>
                <p onClick={onClickMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>X</p>
                <p onClick={onClickMusic} className='bg-red-500 px-6 py-4 text-center rounded-md drum-pad'>C</p>
              </div>

              <div className='flex flex-col justify-center align-middle p-4 border-l-4 border-white space-y-10'>

                <div className='flex justify-center align-middle p-2 gap-2' onClick={togglePower}>
                  <h2>Power</h2>
                  <button id='power' className='bg-gray-400 rounded-md pl-2 pr-2 text-center'>{power}</button>
                </div>

                <button className='bg-gray-400 rounded-md p-2 h-[50px]'>{textBox}</button>

                <div className='flex flex-col justify-center align-middle p-2 pt-0 gap-2'>
                  <p className='text-center'>Volume</p>
                  <input id='volume' type="range" name='volume' onChange={volumeControl} value={volume} min="0" max="100" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default App 
