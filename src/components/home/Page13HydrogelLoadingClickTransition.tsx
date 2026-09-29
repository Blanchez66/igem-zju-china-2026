const assetPathPrefix = `${import.meta.env.BASE_URL}images/home`;
const imgIllustrationHydrogel02 = `${assetPathPrefix}/0ba48.png`;
const imgIllustrationSyringe01 = `${assetPathPrefix}/862d4.png`;
const imgBackgroundSoftBlueField = `${assetPathPrefix}/266ea.svg`;
const imgBackgroundSoftBlueField1 = `${assetPathPrefix}/255f5.svg`;

export default function Page13HydrogelLoadingClickTransition() {
  return (
    <div
      className="home-layer-63"
      data-node-id="286:215"
      data-name="Page 13 / Hydrogel Loading / Click Transition"
    >
      <div
        className="home-layer-141"
        data-node-id="286:216"
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
        data-node-id="286:217"
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
        className="home-layer-143"
        data-node-id="286:218"
        data-name="Illustration / Hydrogel / 02"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-58"
          src={imgIllustrationHydrogel02}
        />
      </div>
      <div
        className="home-layer-144"
        data-node-id="286:219"
        data-name="Illustration / Syringe / 01"
      >
        <img
          alt=""
          loading="lazy"
          decoding="async"
          className="home-layer-58"
          src={imgIllustrationSyringe01}
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
        data-node-id="286:237"
        data-name="Interaction / Click Anywhere / Next"
      />
    </div>
  );
}
