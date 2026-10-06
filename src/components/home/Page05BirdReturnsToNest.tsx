const assetPathPrefix = `${import.meta.env.BASE_URL}images/home`;
import { motion, useReducedMotion } from "motion/react";
import { useStory } from "./StoryContext";
const imgFlightPathDashedOrbit = `${assetPathPrefix}/c381f.png`;
const imgIllustrationRoundedLowerKneeBoneNest = `${assetPathPrefix}/9c526.png`;
const imgMascotRestingInNestFinal = `${assetPathPrefix}/ac8ee.png`;
const imgMascotFlyingHomeAnimated = `${assetPathPrefix}/101df.png`;
const imgAccentBlushGlow = `${assetPathPrefix}/c207d.svg`;
const imgAccentYellowOrbit = `${assetPathPrefix}/55f95.svg`;
const imgNestSoftShadow = `${assetPathPrefix}/abab7.svg`;

const flightFrames = [
  { opacity: 0, rotate: 16, x: 543.448, y: -328.214 },
  { opacity: 1, rotate: 16, x: 543.448, y: -328.214 },
  { opacity: 1, rotate: -7, x: 341.505, y: -105.21 },
  { opacity: 1, rotate: 0, x: 0, y: 0 },
];

export default function Page05BirdReturnsToNest() {
  const { birdProgress, birdStage, birdLandingProgress } = useStory();
  const reduced = useReducedMotion();
  const quick = reduced ? { duration: 0.01 } : undefined;
  const landing = reduced ? Number(birdStage >= 2) : birdLandingProgress;
  const landingEase = landing * landing * (3 - 2 * landing);
  const framePosition =
    Math.max(0, Math.min(1, birdProgress)) * (flightFrames.length - 1);
  const frameIndex = Math.floor(framePosition);
  const from = flightFrames[frameIndex];
  const to = flightFrames[Math.min(frameIndex + 1, flightFrames.length - 1)];
  const fraction = framePosition - frameIndex;
  const interpolate = (start: number, end: number) =>
    start + (end - start) * fraction;
  const flightFrame = {
    opacity: interpolate(from.opacity, to.opacity),
    x: interpolate(from.x, to.x),
    y: interpolate(from.y, to.y),
    rotate: interpolate(from.rotate, to.rotate),
  };

  return (
    <div
      className="home-layer-46"
      data-node-id="186:313"
      data-name="Page 05 / Bird Returns to NEST"
    >
      <div
        className="home-layer-47"
        data-node-id="227:10"
        data-name="Accent / Blush glow"
      >
        <div className="home-layer-48">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="home-layer-49"
            src={imgAccentBlushGlow}
          />
        </div>
      </div>
      <div
        className="home-layer-50"
        data-node-id="227:11"
        data-name="Accent / Yellow orbit"
      >
        <div className="home-layer-51">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="home-layer-49"
            src={imgAccentYellowOrbit}
          />
        </div>
      </div>
      <p className="home-layer-52" data-node-id="227:12">
        NEST
      </p>
      <p className="home-layer-53" data-node-id="227:13">
        RETURN TO NEST
      </p>
      <div
        className="home-layer-54"
        data-node-id="227:14"
        data-name="Flight Path / Dashed Orbit"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-11"
          height="390"
          src={imgFlightPathDashedOrbit}
          width="644"
        />
      </div>
      <div
        className="home-layer-55"
        data-node-id="227:15"
        data-name="Nest / Soft shadow"
      >
        <div className="home-layer-56">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="home-layer-49"
            src={imgNestSoftShadow}
          />
        </div>
      </div>
      <div
        className="home-layer-57"
        data-node-id="227:16"
        data-name="Illustration / Rounded Lower Knee Bone / Nest"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-58"
          src={imgIllustrationRoundedLowerKneeBoneNest}
        />
      </div>
      <div
        className="home-layer-59"
        data-node-id="227:17"
        data-name="Mascot / Resting in Nest / Final"
        style={{
          opacity: birdStage >= 2 ? Math.min(1, landing * 5) : 0,
          transform: `translateY(${42 * (1 - landingEase)}px) scale(${0.58 + 0.42 * landingEase})`,
        }}
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-58"
          src={imgMascotRestingInNestFinal}
        />
      </div>
      <div
        className="home-layer-60"
        data-node-id="227:18"
        data-name="Mascot / Flying Home / Animated"
        style={{
          opacity:
            birdStage >= 2 ? 1 - Math.min(1, landing * 5) : flightFrame.opacity,
          transform: `translate3d(${flightFrame.x}px, ${flightFrame.y}px, 0) rotate(${flightFrame.rotate}deg)`,
        }}
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-58"
          src={imgMascotFlyingHomeAnimated}
        />
      </div>
      <motion.div
        className="home-layer-61"
        data-node-id="227:19"
        data-name="Badge / Welcome Home"
        initial={false}
        animate={{
          opacity: birdStage >= 2 ? 1 : 0,
          y: birdStage >= 2 ? 0 : 12,
        }}
        transition={
          quick ?? {
            duration: 0.38,
            ease: "easeOut",
            delay: birdStage >= 2 ? 0.22 : 0,
          }
        }
      >
        <p className="home-layer-62" data-node-id="227:20">
          HOME, AT LAST
        </p>
      </motion.div>
    </div>
  );
}
