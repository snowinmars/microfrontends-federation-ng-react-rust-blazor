import React, {useState} from 'react'
import {bus, clickerEvent} from 'childBus/web-components/bus';

export const Clicker = () => {
  const [count, setCount] = useState(0);

  return <div>
    <button
      onClick={() => {
        setCount(count + 1);
        bus.publish(clickerEvent({count: count + 1}));
      }}
    >
      {count} ++
    </button>
  </div>
};
