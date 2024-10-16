import { useState, useEffect } from "react";

export interface WindowDimensions {
  width: number
  height: number
}

const getWindowDimensions = () => {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height,
  };
}

const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return windowDimensions;
};

export default useWindowDimensions;