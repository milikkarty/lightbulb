import { useState } from "react";
import bulbOn from './assets/bulb-on.png';
import bulbOff from './assets/bulb-off.png';
import bulbBroken from './assets/bulb-broken.png';

function App() {

  const [isOn, setIsOn] = useState(true);

  const handleSwitch = () => {
    setIsOn(isOn => !isOn);
  };

  return (
    <div className="App">
      <h1>Lightbulb</h1>
        <img
          src={isOn ? bulbOn : bulbOff}
          alt={isOn ? "Light is on." : "Light is off."}
          onClick={handleSwitch}
        />
        <img
          src={bulbBroken}
          alt="Broken bulb."
        />
    </div>
  );
}

export default App;
