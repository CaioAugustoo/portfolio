import { useEffect, useRef } from "react";

const useAnimateOnScroll = () => {
  const elementRef = useRef<HTMLElement>(null!);

  useEffect(() => {
    function handleMutation([entry]: IntersectionObserverEntry[]) {
      if (entry.isIntersecting) {
        elementRef.current.classList.add('active');
        observer.disconnect();
      }
    }
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(handleMutation, options);
    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return elementRef
}

export default useAnimateOnScroll
