import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const getDeviceConfig = (width) => {
  // standard: https://tailwindcss.com/docs/breakpoints
  if (width < 767) {
    return 'sm';
  } else if (width >= 768 && width < 1023) {
    return 'md';
  } else if (width >= 1024) {
    return 'lg';
  } else {
    return false;
  }
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);

    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
};

export default useBreakpoint;
