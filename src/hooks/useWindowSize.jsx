import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    // Cleanup function
    const cleanUp = () => {
      window.removeEventListener("resize", handleResize);
    };
    return cleanUp;
  }, []);

  return windowSize;
};

export default useWindowSize;
