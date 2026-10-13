import { useReducedMotion } from "motion/react";

const assetPathPrefix = `${import.meta.env.BASE_URL}images/home`;
const imgSportsTraumaFrame1 = `${assetPathPrefix}/person-2-frame-1.png`;
const imgSportsTraumaFrame2 = `${assetPathPrefix}/person-2-frame-2.png`;
const imgPage03PowderDisc = `${assetPathPrefix}/3249a.svg`;
const imgPage03YellowAccent = `${assetPathPrefix}/ff246.svg`;
const imgPage03PinkSpark = `${assetPathPrefix}/ea453.svg`;

export default function Page03SportsTrauma({
  frameProgress,
}: {
  frameProgress: number;
}) {
  const reduced = useReducedMotion();
  const frame = reduced ? Number(frameProgress >= 0.5) : frameProgress;
  return (
    <div
      className="home-layer-12"
      data-node-id="186:310"
      data-name="Page 03 / Sports Trauma"
    >
      <div
        className="home-layer-13"
        data-node-id="222:31"
        data-name="Page 03 / Powder Disc"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-11"
          src={imgPage03PowderDisc}
        />
      </div>
      <div
        className="home-layer-14"
        data-node-id="222:32"
        data-name="Page 03 / Yellow Accent"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-11"
          src={imgPage03YellowAccent}
        />
      </div>
      <div
        className="home-layer-15"
        data-node-id="222:33"
        data-name="Page 03 / Illustration Stage"
      />
      <p className="home-layer-16" data-node-id="222:34">
        SPORTS TRAUMA
      </p>
      <div className="home-layer-17" data-node-id="222:35">
        <p className="home-layer-18">Impact happens</p>
        <p className="home-layer-19">in an instant.</p>
      </div>
      <p className="home-layer-20" data-node-id="222:36">
        A sudden knee injury can interrupt movement, confidence, and recovery.
        NEST is designed to support precise repair where it matters most.
      </p>
      <div
        className="home-layer-21"
        data-node-id="222:37"
        data-name="Page 03 / Chip"
      >
        <p className="home-layer-22" data-node-id="222:38">
          TARGETED JOINT REPAIR
        </p>
      </div>
      <div
        className="home-layer-23"
        data-node-id="222:39"
        data-name="Illustration / Sports Knee Trauma"
      >
        <img
          alt="An athlete holding an injured knee after a sports accident"
          loading="lazy"
          decoding="async"
          className="home-layer-9 story-frame-image"
          src={imgSportsTraumaFrame1}
          style={{ opacity: 1 - frame }}
        />
        <img
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="home-layer-9 story-frame-image"
          src={imgSportsTraumaFrame2}
          style={{ opacity: frame }}
        />
      </div>
      <div
        className="home-layer-24"
        data-node-id="224:93"
        data-name="Page 03 / Pink Spark"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-11"
          src={imgPage03PinkSpark}
        />
      </div>
      <div
        className="home-layer-25"
        data-node-id="224:94"
        data-name="Page 03 / Yellow Rule"
      />
    </div>
  );
}
