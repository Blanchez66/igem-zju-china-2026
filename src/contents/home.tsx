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
import Page0610ConnectedBiomanufacturingPipeline from "../components/home/Page0610ConnectedBiomanufacturingPipeline";
import Page11PremixAssemblyScrollTransition from "../components/home/Page11PremixAssemblyScrollTransition";
import Page12HydrogelProductClickTransition from "../components/home/Page12HydrogelProductClickTransition";
import Page13HydrogelLoadingClickTransition from "../components/home/Page13HydrogelLoadingClickTransition";
import Page14KneeInjectionClickTransition from "../components/home/Page14KneeInjectionClickTransition";
import Page15NestResolutionFinal from "../components/home/Page15NestResolutionFinal";
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
      className={`home-scene${index === 0 ? " home-hero-scene" : ""}${index === 15 ? " home-footer-scene" : ""}`}
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
    birdProgress,
    birdStage,
    birdLandingProgress,
    next,
    scenePosition,
    lastStop,
    crossfade,
    sportsText,
    sportsArt,
    rehabText,
    rehabArt,
    nestTitle,
    processTitle,
    processBird,
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
      content: <GlobalBurden stage={burdenStage} progress={burdenProgress} />,
    },
    { name: "Sports trauma", content: <Page03SportsTrauma /> },
    {
      name: "Post-operative rehabilitation",
      content: <Page04PostOpRehabilitation />,
    },
    { name: "Return to NEST", content: <Page05BirdReturnsToNest /> },
    ...Array.from({ length: 5 }, (_, i) => ({
      name: `NEST process ${i + 1}`,
      content: (
        <div className="home-pipeline-window">
          <div style={{ height: 3600, transform: `translateY(${-720 * i}px)` }}>
            <Page0610ConnectedBiomanufacturingPipeline />
          </div>
        </div>
      ),
    })),
    {
      name: "Premix assembly",
      content: <Page11PremixAssemblyScrollTransition />,
    },
    {
      name: "Hydrogel product",
      content: <Page12HydrogelProductClickTransition />,
    },
    {
      name: "Hydrogel loading",
      content: <Page13HydrogelLoadingClickTransition />,
    },
    { name: "Knee injection", content: <Page14KneeInjectionClickTransition /> },
    { name: "NEST resolution", content: <Page15NestResolutionFinal /> },
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
        height: `calc(${(lastStop - 1) * size.height + footerHeight}px + 100dvh)`,
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
          style={{ transform: `translateY(${-scenePosition * size.height}px)` }}
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
                  ...(index === 5
                    ? {
                        "--process-title": processTitle,
                        "--process-bird": processBird,
                      }
                    : {}),
                } as CSSProperties
              }
              active={page === index || (index === 15 && scenePosition > 14)}
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
