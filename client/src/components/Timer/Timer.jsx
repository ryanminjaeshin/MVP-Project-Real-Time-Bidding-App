import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function Timer({refreshTimer}) {

  return (
    <div>
      Timer
      <CountdownCircleTimer
        onComplete={() => (
          console.log('SOLD')
        )
        // ,
        // () => {
        //   setTimeout(() => refreshTimer(), 3000)
        // }
      }
        isPlaying
        duration={5}
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

export default Timer;
