import { useStory } from "./StoryContext";
const assetPathPrefix = `${import.meta.env.BASE_URL}images/home`;
const imgVialUpperLeft = `${assetPathPrefix}/24751.png`;
const imgAnimationPremixAssemblyGif = `${assetPathPrefix}/ad018.png`;
const imgBackdropSoftHalo = `${assetPathPrefix}/e550f.svg`;
const imgShadowContainer = `${assetPathPrefix}/73e38.svg`;
const imgContainerYellowPremix = `${assetPathPrefix}/43134.svg`;
const imgPowderStreamUpperLeft = `${assetPathPrefix}/96f7a.svg`;
const imgPowderStreamUpperRight = `${assetPathPrefix}/71b2d.svg`;
const imgPowderStreamLowerLeft = `${assetPathPrefix}/79d7f.svg`;
const imgPowderStreamLowerRight = `${assetPathPrefix}/99bc1.svg`;

export default function Page11PremixAssemblyScrollTransition() {
  const { next } = useStory();
  return (
    <div
      className="home-layer-110"
      data-node-id="186:341"
      data-name="Page 11 / Premix Assembly / Scroll Transition"
    >
      <div
        className="home-layer-111"
        data-node-id="247:6"
        data-name="Background / Solid Ice Blue"
      />
      <div
        className="home-layer-112"
        data-node-id="247:7"
        data-name="Backdrop / Soft Halo"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-11"
          src={imgBackdropSoftHalo}
        />
      </div>
      <div
        className="home-layer-113"
        data-node-id="247:8"
        data-name="Shadow / Container"
      >
        <div className="home-layer-114">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="home-layer-49"
            src={imgShadowContainer}
          />
        </div>
      </div>
      <div
        className="home-layer-115"
        data-node-id="247:9"
        data-name="Container / Yellow Premix"
      >
        <div className="home-layer-116">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="home-layer-49"
            src={imgContainerYellowPremix}
          />
        </div>
      </div>
      <div className="home-layer-117" data-node-id="247:31">
        <div className="home-layer-118">
          <div
            className="home-layer-119"
            data-name="Powder Stream / Upper Left"
          >
            <div className="home-layer-120">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="home-layer-49"
                src={imgPowderStreamUpperLeft}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-layer-121" data-node-id="247:41">
        <div className="home-layer-122">
          <div
            className="home-layer-119"
            data-name="Powder Stream / Upper Right"
          >
            <div className="home-layer-120">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="home-layer-49"
                src={imgPowderStreamUpperRight}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-layer-123" data-node-id="247:51">
        <div className="home-layer-124">
          <div
            className="home-layer-119"
            data-name="Powder Stream / Lower Left"
          >
            <div className="home-layer-120">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="home-layer-49"
                src={imgPowderStreamLowerLeft}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-layer-125" data-node-id="247:61">
        <div className="home-layer-126">
          <div
            className="home-layer-119"
            data-name="Powder Stream / Lower Right"
          >
            <div className="home-layer-120">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="home-layer-49"
                src={imgPowderStreamLowerRight}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-layer-127" data-node-id="247:71">
        <div className="home-layer-128">
          <div className="home-layer-129" data-name="Vial / Upper Left">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              className="home-layer-58"
              src={imgVialUpperLeft}
            />
          </div>
        </div>
      </div>
      <div className="home-layer-130" data-node-id="247:72">
        <div className="home-layer-131">
          <div className="home-layer-129" data-name="Vial / Upper Right">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              className="home-layer-58"
              src={imgVialUpperLeft}
            />
          </div>
        </div>
      </div>
      <div className="home-layer-132" data-node-id="247:73">
        <div className="home-layer-133">
          <div className="home-layer-129" data-name="Vial / Lower Left">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              className="home-layer-58"
              src={imgVialUpperLeft}
            />
          </div>
        </div>
      </div>
      <div className="home-layer-134" data-node-id="247:74">
        <div className="home-layer-135">
          <div className="home-layer-129" data-name="Vial / Lower Right">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              className="home-layer-58"
              src={imgVialUpperLeft}
            />
          </div>
        </div>
      </div>
      <div
        className="home-layer-136"
        data-node-id="273:6"
        data-name="Animation / Premix Assembly / GIF"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-31"
          src={imgAnimationPremixAssemblyGif}
        />
      </div>
      <button
        type="button"
        aria-label="Continue to the next scene"
        onClick={next}
        className="home-layer-137"
        data-node-id="286:233"
        data-name="Interaction / Click Anywhere / Next"
      />
    </div>
  );
}
