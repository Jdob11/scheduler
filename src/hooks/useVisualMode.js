import { useState } from "react";
export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);
  const transition = (newMode, replace = false) => {
    setHistory(prev => {
      if (replace) {
        return [...prev.slice(0, prev.length - 1), newMode];
      } else {
        return [...prev, newMode];
      }
    });
  };
  const back = () => {
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }
  };

  return {
    mode: history[history.length - 1],
    transition,
    back,
  };
}