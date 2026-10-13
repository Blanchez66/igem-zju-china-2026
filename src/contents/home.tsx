import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import HeroSection from "../components/home/HeroSection";
import GlobalBurden from "../components/home/GlobalBurden";
import Page03SportsTrauma from "../components/home/Page03SportsTrauma";
import Page04PostOpRehabilitation from "../components/home/Page04PostOpRehabilitation";
import Page05BirdReturnsToNest from "../components/home/Page05BirdReturnsToNest";
import FigmaProcessContent from "../components/home/FigmaProcessContent";
import { Footer } from "../components/Footer";
import "../components/home/layers.css";
import "./home.css";

import { StoryContext } from "../components/home/StoryContext";
import { useStoryNavigation } from "../components/home/useStoryNavigation";

function Scene({
  children,
  name,
  index,
  active,
  birdProgress,
  birdStage,
  birdLandingProgress,
  next,
  pipelineStep = -1,
  pipelineProgress = 0,
  style,
}: {
  children: ReactNode;
  name: string;
  index: number;
  active: boolean;
  birdProgress: number;
  birdStage: number;
  birdLandingProgress: number;
  next: () => void;
  pipelineStep?: number;
  pipelineProgress?: number;
  style?: CSSProperties;
}) {
  return (
    <section
      id={`home-${index + 1}`}
      className={`home-scene${index === 0 ? " home-hero-scene" : ""}${index === 6 ? " home-footer-scene" : ""}`}
      aria-label={name}
      style={style}
      aria-hidden={!active}
      {...(!active ? { inert: "" } : {})}
    >
      <StoryContext.Provider
        value={{
          active,
          birdProgress,
          birdStage,
          birdLandingProgress,
          next,
          pipelineStep,
          pipelineProgress,
        }}
      >
        <div className="home-scene-canvas">{children}</div>
      </StoryContext.Provider>
    </section>
  );
}
export function Home() {
  const {
    stop,
    page,
    burdenStage,
    burdenProgress,
    burdenPain,
    birdProgress,
    birdStage,
    birdLandingProgress,
    next,
    scenePosition,
    contentScroll,
    crossfade,
    sportsText,
    sportsArt,
    sportsFrame,
    rehabText,
    rehabArt,
    rehabFrame,
    nestTitle,
  } = useStoryNavigation();
  const viewport = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 1280, height: 720 });
  const [footerHeight, setFooterHeight] = useState(278);
  useEffect(() => {
    document.body.classList.add("home-story-open");
    document.documentElement.classList.add("home-story-open");
    window.scrollTo(0, 0);
    const element = viewport.current;
    const observer = new ResizeObserver(([entry]) =>
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      }),
    );
    if (element) observer.observe(element);
    const footer = element?.querySelector(".footer--story");
    const footerObserver = new ResizeObserver(([entry]) => {
      setFooterHeight(entry.target.getBoundingClientRect().height);
    });
    if (footer) footerObserver.observe(footer);
    return () => {
      observer.disconnect();
      footerObserver.disconnect();
      document.body.classList.remove("home-story-open");
      document.documentElement.classList.remove("home-story-open");
    };
  }, []);
  const scenes = [
    {
      name: "NEST",
      content: (
        <>
          <HeroSection />
          <button
            className="home-scroll-cue"
            onClick={next}
            aria-label="Explore the NEST story"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/home/chevrons.svg`}
              width="26.4167"
              height="29"
              alt=""
            />
          </button>
        </>
      ),
    },
    {
      name: "Global burden",
      content: (
        <GlobalBurden
          stage={burdenStage}
          progress={burdenProgress}
          painProgress={burdenPain}
        />
      ),
    },
    {
      name: "Sports trauma",
      content: <Page03SportsTrauma frameProgress={sportsFrame} />,
    },
    {
      name: "Post-operative rehabilitation",
      content: <Page04PostOpRehabilitation frameProgress={rehabFrame} />,
    },
    { name: "Return to NEST", content: <Page05BirdReturnsToNest /> },
    { name: "NEST materials and hydrogel", content: <FigmaProcessContent /> },
    { name: "NEST footer", content: <Footer story /> },
  ];
  const designHeight = (size.width / 1366) * 6934;
  const style = {
    "--design-scale": size.width / 1366,
    "--design-height": `${designHeight}px`,
    "--scene-scale": Math.min(size.width / 1280, size.height / 720),
    "--screen-height": `${size.height}px`,
    "--screen-width": `${size.width}px`,
  } as CSSProperties;
  return (
    <div
      className="home-scroll-space"
      style={{
        height: 17 * size.height + designHeight + footerHeight + 88,
      }}
    >
      <div
        ref={viewport}
        className="nest-home story-viewport"
        style={style}
        data-story-stop={stop}
        data-story-page={page + 1}
        data-bird-progress={birdProgress}
      >
        <div
          className="story-track"
          style={{
            transform: `translateY(${-scenePosition * size.height - contentScroll}px)`,
          }}
        >
          {scenes.map((scene, index) => (
            <Scene
              key={scene.name}
              name={scene.name}
              index={index}
              style={
                {
                  ...(crossfade?.incoming === index
                    ? {
                        transform: "translateY(-100%)",
                        opacity: crossfade.opacity,
                        zIndex: 2,
                      }
                    : {}),
                  ...(index === 2 || index === 3
                    ? {
                        "--intro-text": index === 2 ? sportsText : rehabText,
                        "--intro-art": index === 2 ? sportsArt : rehabArt,
                      }
                    : {}),
                  ...(index === 4 ? { "--nest-title": nestTitle } : {}),
                } as CSSProperties
              }
              active={page === index || (index === 6 && page === 5)}
              birdProgress={birdProgress}
              birdStage={birdStage}
              birdLandingProgress={birdLandingProgress}
              next={next}
              pipelineStep={index >= 5 && index <= 9 ? index - 5 : -1}
              pipelineProgress={Math.max(0, Math.min(4, scenePosition - 5))}
            >
              {scene.content}
            </Scene>
          ))}
        </div>
      </div>
    </div>
  );
}
