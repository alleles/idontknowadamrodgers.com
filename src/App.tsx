import React, { useEffect, useRef } from 'react';
import './App.css';
import { Player, Video, DefaultUi, usePlayerContext } from '@vime/react';

// Default theme.
import '@vime/core/themes/default.css';

// Optional light theme (extends default).
// import '@vime/core/themes/light.css';

// Custom UI component.
import TapSidesToSeek from './TapSidesToSeek';

function App() {
  // Obtain a ref if you need to call any methods.
  const player = useRef<HTMLVmPlayerElement>(null);

  const onPlaybackReady = () => {
    // ...
  };

  // If you prefer hooks :)
  const [currentTime] = usePlayerContext(player, 'currentTime', 0);

  useEffect(() => {
    console.log(currentTime);
  }, [currentTime]);

  return (
    <div id="container">
      <Player playsinline ref={player} onVmPlaybackReady={onPlaybackReady}>
        <Video poster="https://media.vimejs.com/poster.png">
          <source
            data-src="https://adam-rodgers.s3.amazonaws.com/stoked-studio/words-to-say_2_2.mp4"
            type="video/mp4"
          />
        </Video>

        <DefaultUi>
          {/* Custom UI Component. */}
          <TapSidesToSeek />
        </DefaultUi>
      </Player>
    </div>
  );
}

export default App;
