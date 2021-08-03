import React, { useState } from 'react';
import styled from 'styled-components'

// components
import Lamp from './Lamp';

import LightSwitch from './LightSwitch'

const Room = styled.div`
position:relative;
width:500px;
height:500px;
border:10px solid black;
margin: 0 auto;
`;


const App = ()=> {
  // lamp one
const [isLampOneOn,setIsLampOneOn] =useState(false)
// lamp two
const [isLampTwoOn,setIsLampTwoOn] =useState(true)

const handleLightSwitchOne=() => setIsLampOneOn(prev =>!prev);
const handleLightSwitchTwo=() => setIsLampTwoOn(prev =>!prev);  

  return (
    <Room>
<Lamp lampOn={{isLampOneOn}} position='left'/>
<Lamp lampOn={{isLampTwoOn}} position='right'/>

<LightSwitch
name='one'
callback={handleLightSwitchOne}
switchON={isLampOneOn}
position= 'left'
/>

<LightSwitch
name='two'
callback={handleLightSwitchTwo}
switchON={isLampTwoOn}
position= 'right'
/>

    </Room>,

    <div className="App">
      Start here.
    </div>
  );
}

export default App;
