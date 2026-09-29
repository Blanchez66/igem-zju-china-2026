const assetPathPrefix = `${import.meta.env.BASE_URL}images/home`;
const imgIllustrationSportsKneeTrauma = `${assetPathPrefix}/09349.png`;
const imgPage03PowderDisc = `${assetPathPrefix}/3249a.svg`;
const imgPage03YellowAccent = `${assetPathPrefix}/ff246.svg`;
const imgPage03PinkSpark = `${assetPathPrefix}/ea453.svg`;

export default function Page03SportsTrauma() {
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
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-9"
          src={imgIllustrationSportsKneeTrauma}
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
