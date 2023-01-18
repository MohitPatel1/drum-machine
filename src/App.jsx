import { useEffect } from 'react'
import { useState } from 'react'

function App() {
// declaring states and audio
  const [power, setPower] = useState("Off")
  const [textBox, setTextBox] = useState("Welcome")
  // const [volume, setVolume] = useState("50")
  const volumeElement = document.getElementById("volume");
  const audio = new Audio()
  
// toggle power function 
  const togglePower = ()=> {
    if(power == "Off") {
      setPower("On") 
      setTextBox("Play ")
    }
    else{
      setPower("Off") 
      setTextBox("Turn on Power")
    }
  }
// play music function using click
  const playMusic = (event) => {
    if(power == "On"){
      switch(event.target.innerHTML){
        case ("Q"):
          audio.src = "src/music/Heater-1.mp3";
          setTextBox("Heater 1");
          break;
      
        case "W":
          audio.src = "src/music/Heater-2.mp3";
          setTextBox("Heater 2");
          break;

        case "E":
          audio.src = "src/music/Heater-3.mp3";
          setTextBox("Heater 3");
          break;
      
        case "A":
          audio.src = "src/music/Heater-4.mp3";
          setTextBox("Heater 4");
          break;
        
        case "S":
          audio.src = "src/music/Clap.mp3";
          setTextBox("Clap");
          break;
      
        case "D":
          audio.src = "src/music/Open-HH.mp3";
          setTextBox("Open HH");
          break;
      
        case "Z":
          audio.src = "src/music/Kick_n_Hat.mp3";
          setTextBox("Kick n' Hat");
          break;
      
        case "X":
          audio.src = "src/music/Kick.mp3";
          setTextBox("Kick");
          break;
        
        case "C":
          audio.src = "src/music/Closed-HH.mp3";  
          setTextBox("Closed HH");
          break;
        }
        audio.play();
      }
      else{
        setTextBox("Turn on Power")
      }
    }

// play music function using key press event listener
const keyPressMusic = (event) => {
  const key = event.key.toUpperCase()
    switch(key){
      case ("Q"):
        audio.src = "src/music/Heater-1.mp3";
        setTextBox("Heater 1");
        break;
    
      case "W":
        audio.src = "src/music/Heater-2.mp3";
        setTextBox("Heater 2");
        break;

      case "E":
        audio.src = "src/music/Heater-3.mp3";
        setTextBox("Heater 3");
        break;
    
      case "A":
        audio.src = "src/music/Heater-4.mp3";
        setTextBox("Heater 4");
        break;
      
      case "S":
        audio.src = "src/music/Clap.mp3";
        setTextBox("Clap");
        break;
    
      case "D":
        audio.src = "src/music/Open-HH.mp3";
        setTextBox("Open HH");
        break;
    
      case "Z":
        audio.src = "src/music/Kick_n_Hat.mp3";
        setTextBox("Kick n' Hat");
        break;
    
      case "X":
        audio.src = "src/music/Kick.mp3";
        setTextBox("Kick");
        break;
      
      case "C":
        audio.src = "src/music/Closed-HH.mp3";  
        setTextBox("Closed HH");
        break;
      }
      audio.play();
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
  
  // volume change function
  // const onVolumeChange = () => {
  //   const volumeElement = document.getElementById("volume");
  //   volumeElement.addEventListener("change", () => {
  //     audio.volume = volumeElement.value / 100;
  //     console.log(audio.volume)
  //   })
  // } 
  
  const onVolumeChange = () => {
    console.log(volumeElement.value / 100)
    // audio.volume = volumeElement.value / 100 ;
    volumeElement.volume = 0
    console.log(audio.volume)
  }

// use effect hook
  // useEffect(onVolumeChange, []);
  useEffect(onKeyPress,[power]);

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

              <div className='flex flex-col justify-center align-middle p-4 border-l-4 border-white space-y-10'>

                <div className='flex justify-center align-middle p-2 gap-2' onClick={togglePower}>
                  <h2>Power</h2>
                  <button id='power' className='bg-gray-400 rounded-md pl-2 pr-2 text-center'>{power}</button>
                </div>

                <button className='bg-gray-400 rounded-md p-2 h-[50px]'>{textBox}</button>

                <div className='flex flex-col justify-center align-middle p-2 pt-0 gap-2'>
                  <p className='text-center'>Volume</p>
                  <input id='volume' type="range" name='volume' onChange={onVolumeChange} min="0" max="100"/>
                </div>

              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App

