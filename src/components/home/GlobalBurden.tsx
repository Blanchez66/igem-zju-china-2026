import { AnimatedLayer } from "./AnimatedLayer";
const asset = `${import.meta.env.BASE_URL}images/home/`;
export default function GlobalBurden() {
  return (
    <div className="global-burden" data-node-id="186:270">
      <div className="burden-heading">
        <p className="home-eyebrow">GLOBAL BURDEN</p>
        <h2>
          When everyday
          <br />
          movement hurts
        </h2>
      </div>
      <div className="burden-map-card" />
      <AnimatedLayer nodeId="218:10" className="burden-map">
        <img
          className="world-map"
          src={`${asset}world-map.svg`}
          alt="World map showing osteoarthritis prevalence"
          loading="lazy"
        />
        <div className="map-legend">
          <strong>PREVALENCE RATE · PER 100,000</strong>
          <img src={`${asset}490d7.svg`} alt="" />
          <span>2,579</span>
          <span>19,222</span>
        </div>
      </AnimatedLayer>
      <AnimatedLayer nodeId="218:844" className="burden-person">
        <img
          src={`${asset}1530e.png`}
          alt="A person experiencing knee pain while climbing stairs"
          loading="lazy"
        />
      </AnimatedLayer>
      <AnimatedLayer nodeId="217:848" className="burden-stat">
        <strong>595000000</strong>
        <p>people worldwide live with osteoarthritis</p>
      </AnimatedLayer>
      <p className="burden-source">IHME GBD 2023 · global prevalence</p>
    </div>
  );
}
