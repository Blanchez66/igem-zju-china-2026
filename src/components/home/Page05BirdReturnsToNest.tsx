const assetPathPrefix = `${import.meta.env.BASE_URL}images/home`;
import { AnimatedLayer } from "./AnimatedLayer";
const imgFlightPathDashedOrbit = `${assetPathPrefix}/c381f.png`;
const imgIllustrationRoundedLowerKneeBoneNest = `${assetPathPrefix}/9c526.png`;
const imgMascotRestingInNestFinal = `${assetPathPrefix}/ac8ee.png`;
const imgMascotFlyingHomeAnimated = `${assetPathPrefix}/101df.png`;
const imgAccentBlushGlow = `${assetPathPrefix}/c207d.svg`;
const imgAccentYellowOrbit = `${assetPathPrefix}/55f95.svg`;
const imgNestSoftShadow = `${assetPathPrefix}/abab7.svg`;

export default function Page05BirdReturnsToNest() {
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
      <AnimatedLayer
        className="home-layer-59"
        nodeId="227:17"
        data-node-id="227:17"
        data-name="Mascot / Resting in Nest / Final"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-58"
          src={imgMascotRestingInNestFinal}
        />
      </AnimatedLayer>
      <AnimatedLayer
        className="home-layer-60"
        nodeId="227:18"
        data-node-id="227:18"
        data-name="Mascot / Flying Home / Animated"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-58"
          src={imgMascotFlyingHomeAnimated}
        />
      </AnimatedLayer>
      <AnimatedLayer
        className="home-layer-61"
        nodeId="227:19"
        data-node-id="227:19"
        data-name="Badge / Welcome Home"
      >
        <p className="home-layer-62" data-node-id="227:20">
          HOME, AT LAST
        </p>
      </AnimatedLayer>
    </div>
  );
}
