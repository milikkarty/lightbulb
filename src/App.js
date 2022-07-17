import { useState } from "react";
import { TbBulb, TbBulbOff, TbCookie } from 'react-icons/tb';
import { ErrorBoundary } from 'react-error-boundary';

function Content () {
  const [isOn, setIsOn] = useState(true);
  const [isCookiePressed, setIsCookiePressed] = useState(false);

  if (isCookiePressed) {
    throw new Error('Don\'t touch it. It\'s for Christmas.');
  };

  const iconStyle = {
    cursor: 'pointer',
    height: '3rem',
    margin: 7,
    width: '2rem'
  }

  const bgColor = isOn ? 'white' : 'black';
  const color = isOn ? 'black' : 'white';

  const handleSwitch = () => {
    setIsOn(isOn => !isOn);
  };

  const handleCookieSwitch = () => {
    setIsCookiePressed(true);
  };

  return (
    <div className="content" style={{ background: bgColor, color: color }}>
      <header>
        <span>
          {
            isOn ? (
              <TbBulb style={iconStyle} onClick={handleSwitch} />
            ) : (
              <TbBulbOff style={iconStyle} onClick={handleSwitch} />
            )
          }
        </span>
        <h1>I</h1>
        <span>
          <TbCookie style={iconStyle} onClick={handleCookieSwitch} />
        </span>
      </header>
      <article>
        <p>The Salinas Valley is in Northern California. It is a long narrow swale between two ranges of mountains, and the Salinas River winds and twists up the center until it falls at last into Monterey Bay.
          <br />
          <br />
          I remember my childhood names for grasses and secret flowers. I remember where a toad may live and what time the birds awaken in the summer — and what trees and seasons smelled like — how people looked and walked and smelled even. The memory of odors is very rich.
          <br />
          <br />
          I remember that the Gabilan Mountains to the east of the valley were light gay mountains full of sun and loveliness and a kind of invitation, so that you wanted to climb into their warm foothills almost as you want to climb into the lap of a beloved mother. They were beckoning mountains with a brown grass love. The Santa Lucias stood up against the sky to the west and kept the valley from the open sea, and they were dark and brooding — unfriendly and dangerous. I always found in myself a dread of west and a love of east. Where I ever got such an idea I cannot say, unless it could be that the morning came over the peaks of the Gabilans and the night drifted back from the ridges of the Santa Lucias. It may be that the birth and death of the day had some part in my feeling about the two ranges of mountains.
        </p>
      </article>
    </div>
  );
}

function ErrorFallback ({ error, resetErrorBoundary }) {
  return (
    <header className="errorHeader">
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>A'ight</button>
    </header>
  );
}

function App () {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Content />
      </ErrorBoundary>
    </div>
  );
}

export default App;