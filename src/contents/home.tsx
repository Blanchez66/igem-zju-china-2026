import { useEffect, useRef, useState, type ReactNode } from "react";
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
import "../components/home/layers.css";
import "./home.css";

function Scene({
  children,
  height = 720,
  name,
  id,
}: {
  children: ReactNode;
  height?: number;
  name: string;
  id: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);
  const [mobileStory, setMobileStory] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      const reflow =
        entry.contentRect.width < 600 &&
        ["home-2", "home-3", "home-4"].includes(id);
      setMobileStory(reflow);
      setScale(reflow ? 1 : entry.contentRect.width / 1280);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [id]);
  return (
    <section
      ref={ref}
      id={id}
      aria-label={name}
      tabIndex={-1}
      className={`home-scene ${mobileStory ? "home-story-mobile" : ""}`}
      style={{ height: mobileStory ? undefined : height * scale }}
    >
      <div
        className="home-scene-canvas"
        style={{
          height: mobileStory ? undefined : height,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </section>
  );
}
export function Home() {
  return (
    <div className="nest-home">
      <Scene id="home-1" name="NEST" height={611.5}>
        <HeroSection />
        <a
          className="home-scroll-cue"
          href="#home-2"
          aria-label="Explore the NEST story"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/home/chevrons.svg`}
            width="26.4167"
            height="29"
            alt=""
          />
        </a>
      </Scene>
      <Scene id="home-2" name="Global burden" height={720}>
        <GlobalBurden />
      </Scene>
      <Scene id="home-3" name="Sports trauma" height={720}>
        <Page03SportsTrauma />
      </Scene>
      <Scene id="home-4" name="Post-operative rehabilitation" height={720}>
        <Page04PostOpRehabilitation />
      </Scene>
      <Scene id="home-5" name="Return to NEST" height={720}>
        <Page05BirdReturnsToNest />
      </Scene>
      <Scene id="home-6" name="NEST process" height={3600}>
        <Page0610ConnectedBiomanufacturingPipeline />
      </Scene>
      <Scene id="home-7" name="Premix assembly" height={720}>
        <Page11PremixAssemblyScrollTransition />
      </Scene>
      <Scene id="home-8" name="Hydrogel product" height={720}>
        <Page12HydrogelProductClickTransition />
      </Scene>
      <Scene id="home-9" name="Hydrogel loading" height={720}>
        <Page13HydrogelLoadingClickTransition />
      </Scene>
      <Scene id="home-10" name="Knee injection" height={720}>
        <Page14KneeInjectionClickTransition />
      </Scene>
      <Scene id="home-11" name="NEST resolution" height={720}>
        <Page15NestResolutionFinal />
      </Scene>
    </div>
  );
}
