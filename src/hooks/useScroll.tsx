import { useEffect, useState } from "react";

const useScroll = (target: number = 600) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      window.pageYOffset > target ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return { scrolled };
};

export default useScroll;
