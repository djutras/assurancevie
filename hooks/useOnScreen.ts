
import React, { useState, useEffect } from 'react';

const useOnScreen = <T extends Element,>(ref: React.RefObject<T>, rootMargin = '0px'): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if(currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

export default useOnScreen;
