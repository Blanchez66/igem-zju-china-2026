import { useStory } from "./StoryContext";
const assetPathPrefix = `${import.meta.env.BASE_URL}images/home`;
const imgIllustrationHydrogel01 = `${assetPathPrefix}/0ba48.png`;
const imgMascotLookingUpAtHydrogelRecolored = `${assetPathPrefix}/41743.png`;
const imgInteractionHydrogelRipple = `${assetPathPrefix}/60f06.svg`;

export default function Page12HydrogelProductClickTransition() {
  const { next } = useStory();
  return (
    <div
      className="home-layer-63"
      data-node-id="286:212"
      data-name="Page 12 / Hydrogel Product / Click Transition"
    >
      <div
        className="home-layer-138"
        data-node-id="286:213"
        data-name="Illustration / Hydrogel / 01"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-58"
          src={imgIllustrationHydrogel01}
        />
      </div>
      <div
        className="home-layer-139"
        data-node-id="286:214"
        data-name="Interaction / Hydrogel Ripple"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-11"
          src={imgInteractionHydrogelRipple}
        />
      </div>
      <div
        className="home-layer-140"
        data-node-id="286:232"
        data-name="Mascot / Looking Up at Hydrogel / Recolored"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-58"
          src={imgMascotLookingUpAtHydrogelRecolored}
        />
      </div>
      <button
        type="button"
        aria-label="Continue to the next scene"
        onClick={next}
        className="home-layer-137"
        data-node-id="286:235"
        data-name="Interaction / Click Anywhere / Next"
      />
    </div>
  );
}
