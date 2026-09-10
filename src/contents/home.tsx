import { useEffect, useRef, useState } from "react";
import "./home.css";

export function Home() {
  const firstPageRef = useRef<HTMLElement>(null);
  const [firstPageOpacity, setFirstPageOpacity] = useState(1);

  useEffect(() => {
    const updateFirstPageOpacity = () => {
      if (!firstPageRef.current) return;

      const firstPageHeight = firstPageRef.current.offsetHeight;
      const scrollDistance = Math.min(window.scrollY, firstPageHeight);
      const opacity = 1 - scrollDistance / firstPageHeight;

      setFirstPageOpacity(opacity);
    };

    updateFirstPageOpacity();
    window.addEventListener("scroll", updateFirstPageOpacity, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateFirstPageOpacity);
    };
  }, []);

  return (
    <>
      <section
        ref={firstPageRef}
        className="home-page home-page-first"
        style={{ opacity: firstPageOpacity }}
      />
    </>
  );
}
