import "./Footer.css";

export function Footer({ story = false }: { story?: boolean }) {
  return (
    <footer
      className={`footer${story ? " footer--story" : ""}`}
      data-node-id="192:311"
      data-name="Footer / NEST / Desktop"
    >
      <div className="footer__left" data-node-id="192:312">
        <span className="footer__brand" aria-label="NEST">
          NEST
        </span>
        <p data-node-id="192:315">
          An engineered hydrogel platform for healthier joints and a better
          tomorrow.
        </p>
      </div>

      <div className="footer__legal" data-node-id="192:316">
        <p>
          © 2026 - Content on this site is licensed under a{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/" rel="license">
            Creative Commons Attribution 4.0 International license
          </a>
          .
        </p>
        <p>
          The repository used to create this website is available at{" "}
          <a href="https://gitlab.igem.org/2026/zju-china">
            gitlab.igem.org/2026/zju-china
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
