import { useEffect } from "react";

export const useEventPlayer = (events, handler) => {
  useEffect(() => {
    events.forEach((event, i) => {
      setTimeout(() => handler(event), i * 1000);
    });
  }, []);
};