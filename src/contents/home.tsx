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
  footer = false,
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
  footer?: boolean;
  style?: CSSProperties;
}) {
  return (
    <section
      id={`home-${index + 1}`}
      className={`home-scene${index === 0 ? " home-hero-scene" : ""}${footer ? " home-footer-scene" : ""}`}
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
    return () => {
      observer.disconnect();
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
    { name: "NEST footer", content: <Footer story /> },
  ];
  const style = {
    "--scene-scale": Math.min(size.width / 1280, size.height / 720),
    "--screen-height": `${size.height}px`,
    "--screen-width": `${size.width}px`,
  } as CSSProperties;
  return (
    <div
      className="home-scroll-space"
      style={{
        height: 18 * size.height,
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
            transform: `translateY(${-scenePosition * size.height}px)`,
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
              active={page === index}
              footer={scene.name === "NEST footer"}
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
