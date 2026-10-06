import { useCallback, useEffect, useState } from "react";

export const STORY_STOPS = [
  0, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  14, 15,
];

// Give each pipe segment twice the scroll distance, without slowing other scenes.
const PIPE_SCROLL_START = 15;
const PIPE_SCROLL_END = 19;
function fromScrollUnits(units: number) {
  if (units <= PIPE_SCROLL_START) return units;
  if (units <= PIPE_SCROLL_END + 4)
    return PIPE_SCROLL_START + (units - PIPE_SCROLL_START) / 2;
  return units - 4;
}
function toScrollUnits(position: number) {
  if (position <= PIPE_SCROLL_START) return position;
  if (position <= PIPE_SCROLL_END)
    return PIPE_SCROLL_START + (position - PIPE_SCROLL_START) * 2;
  return position + 4;
}

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
      setPosition(
        Math.max(
          0,
          Math.min(
            STORY_STOPS.length - 1,
            fromScrollUnits((window.scrollY - start) / viewport.clientHeight),
          ),
        ),
      );
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
        toScrollUnits(Math.max(0, Math.min(STORY_STOPS.length - 1, target))) *
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
    rehabText: reveal(7.05),
    rehabArt: reveal(7.5),
    nestTitle: reveal(9.1),
    processTitle: reveal(14.05),
    processBird: reveal(14.5),
    lastStop: toScrollUnits(STORY_STOPS.length - 1),
    burdenStage: position < 2 ? 0 : position < 3 ? 1 : 2,
    // Finish counting at 3.75, hold the full number, then crossfade at 4.
    burdenProgress: Math.max(0, Math.min(1, (position - 3) / 0.75)),
    // Spread the flight across both stationary bird-scene intervals.
    birdProgress: Math.max(0, Math.min(1, (position - 10) / 2)),
    birdStage: position < 11 ? 0 : position < 12 ? 1 : 2,
    birdLandingProgress: Math.max(0, Math.min(1, (position - 12) / 0.85)),
    next: () => seek(Math.floor(position + 0.001) + 1),
    previous: () => seek(Math.ceil(position - 0.001) - 1),
  };
}
