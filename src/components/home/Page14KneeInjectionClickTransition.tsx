const assetPathPrefix = `${import.meta.env.BASE_URL}images/home`;
const imgIllustrationKneeContinuousUpperHalf = `${assetPathPrefix}/9f941.png`;
const imgIllustrationSyringe02 = `${assetPathPrefix}/862d4.png`;
const imgBackgroundSoftBlueField = `${assetPathPrefix}/266ea.svg`;
const imgBackgroundSoftBlueField1 = `${assetPathPrefix}/255f5.svg`;
const imgInteractionInjectionGlow = `${assetPathPrefix}/b5382.svg`;

export default function Page14KneeInjectionClickTransition() {
  return (
    <div
      className="home-layer-63"
      data-node-id="286:220"
      data-name="Page 14 / Knee Injection / Click Transition"
    >
      <div
        className="home-layer-141"
        data-node-id="286:221"
        data-name="Background / Soft blue field"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-11"
          src={imgBackgroundSoftBlueField}
        />
      </div>
      <div
        className="home-layer-142"
        data-node-id="286:222"
        data-name="Background / Soft blue field"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-11"
          src={imgBackgroundSoftBlueField1}
        />
      </div>
      <div
        className="home-layer-145"
        data-node-id="286:223"
        data-name="Illustration / Knee / Continuous / Upper Half"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-58"
          src={imgIllustrationKneeContinuousUpperHalf}
        />
      </div>
      <div
        className="home-layer-146"
        data-node-id="286:224"
        data-name="Illustration / Syringe / 02"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-58"
          src={imgIllustrationSyringe02}
        />
      </div>
      <div
        className="home-layer-147"
        data-node-id="286:225"
        data-name="Interaction / Injection Glow"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-11"
          src={imgInteractionInjectionGlow}
        />
      </div>
      <button
        type="button"
        aria-label="Continue to the next scene"
        onClick={(event) => {
          const next =
            event.currentTarget.closest("section")?.nextElementSibling;
          if (next instanceof HTMLElement) {
            next.scrollIntoView({
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            });
            next.focus({ preventScroll: true });
          }
        }}
        className="home-layer-137"
        data-node-id="286:239"
        data-name="Interaction / Click Anywhere / Next"
      />
    </div>
  );
}
