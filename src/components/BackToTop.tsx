import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./BackToTop.css";

export function BackToTop() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isPopping, setIsPopping] = useState(false);

  useEffect(() => {
    setIsVisible(false);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 720);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      setIsPopping(true);
    }

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`back-to-top${isVisible ? " back-to-top--visible" : ""}${isPopping ? " back-to-top--popping" : ""}`}
      aria-label="Back to top"
      title="Back to top"
      onClick={handleClick}
      onAnimationEnd={() => setIsPopping(false)}
    >
      <img
        src={`${import.meta.env.BASE_URL}images/navigation/back-to-top-button.png`}
        alt=""
        width="1151"
        height="1619"
      />
    </button>
  );
}
