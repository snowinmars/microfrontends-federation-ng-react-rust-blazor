import React, {useEffect, useState} from 'react'
import {bus, setClickerCount, onClickerCountChanged} from 'childBus/web-components/bus';

export const Clicker = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    bus.subscribe(onClickerCountChanged, (e) => {
      setCount(e.payload.count);
    })
  }, [])

  return <div>
    <button
      onClick={() => {
        bus.publish(setClickerCount({count: count + 1}));
      }}
    >
      {count} ++
    </button>
  </div>
};
