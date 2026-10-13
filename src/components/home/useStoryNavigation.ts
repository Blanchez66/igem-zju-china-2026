import { useCallback, useEffect, useState } from "react";

export const STORY_STOPS = [
  0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5,
];

/** Native scrolling controls the timeline without wheel or touch interception. */
export function useStoryNavigation() {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const root = document.querySelector<HTMLElement>(".home-scroll-space");
      const viewport = document.querySelector<HTMLElement>(".story-viewport");
      if (!root || !viewport) return;
      const start = root.getBoundingClientRect().top + window.scrollY;
      const units = (window.scrollY - start) / viewport.clientHeight;
      setPosition(Math.max(0, Math.min(STORY_STOPS.length - 1, units)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  const seek = useCallback((target: number) => {
    const root = document.querySelector<HTMLElement>(".home-scroll-space");
    const viewport = document.querySelector<HTMLElement>(".story-viewport");
    if (!root || !viewport) return;
    window.scrollTo({
      top:
        root.getBoundingClientRect().top +
        window.scrollY +
        Math.max(0, Math.min(STORY_STOPS.length - 1, target)) *
          viewport.clientHeight,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }, []);
  const stop = Math.floor(position);
  const fraction = position - stop;
  const from = STORY_STOPS[stop];
  const to = STORY_STOPS[Math.min(stop + 1, STORY_STOPS.length - 1)];
  // Overlay the incoming scene instead of moving the two backgrounds vertically.
  const cut = from !== to && from >= 1 && to <= 5;
  const scenePosition = cut ? from : from + (to - from) * fraction;
  const reveal = (start: number) =>
    Math.max(0, Math.min(1, (position - start) / 0.35));
  return {
    stop,
    page: Math.round(scenePosition),
    scenePosition,
    crossfade: cut
      ? { incoming: to, opacity: fraction * fraction * (3 - 2 * fraction) }
      : null,
    sportsText: reveal(5.05),
    sportsArt: reveal(5.5),
    sportsFrame: Math.max(0, Math.min(1, position - 6)),
    rehabText: reveal(8.05),
    rehabArt: reveal(8.5),
    rehabFrame: Math.max(0, Math.min(2, position - 9)),
    nestTitle: reveal(12.1),
    burdenStage: position < 2 ? 0 : position < 3 ? 1 : 2,
    // Crossfade to the more painful pose during the latter half of this scene.
    burdenPain: Math.max(0, Math.min(1, position - 2.35)),
    // Finish counting at 3.75, hold the full number, then crossfade at 4.
    burdenProgress: Math.max(0, Math.min(1, (position - 3) / 0.75)),
    // Spread the flight across both stationary bird-scene intervals.
    birdProgress: Math.max(0, Math.min(1, (position - 13) / 2)),
    birdStage: position < 14 ? 0 : position < 15 ? 1 : 2,
    birdLandingProgress: Math.max(0, Math.min(1, (position - 15) / 0.85)),
    next: () => seek(Math.floor(position + 0.001) + 1),
    previous: () => seek(Math.ceil(position - 0.001) - 1),
  };
}
