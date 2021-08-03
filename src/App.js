import React, { useState } from 'react';


const App = ()=> {
  // lamp one
const [isLampOneOn,setIsLampOneOn] =useState(false)
// lamp two
const [isLampTwoOn,setIsLampTwoOn] =useState(true)

const handleLightSwitchOne=() => setIsLampOneOn(prev =>!prev);
const handleLightSwitchTwo=() => setIsLampTwoOn(prev =>!prev);  

  return (
    <div className="App">
      Start here.
    </div>
  );
}

export default App;
