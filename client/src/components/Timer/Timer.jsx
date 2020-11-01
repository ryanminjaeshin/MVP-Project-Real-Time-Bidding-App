import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function Timer(props) {
  if (props.refresh) {
    return (
      <div>
        Timer
        <CountdownCircleTimer
          onComplete={() => (
            [true]
          )}
          isPlaying
          duration={60}
          colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    );
  }
  return (
    <div>
      FALSE
    </div>
  );
}

export default Timer;
