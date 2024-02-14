import { useState, useEffect } from "react";

function Timer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);

    return () => {
      clearTimeout(timer)
    }
  }, [onTimeOut, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(interval)
    }
  }, []);

  return (
    <>
      <progress className="w-1/2" value={remainingTime} max={timeout} />
    </>
  );
}

export default Timer;
