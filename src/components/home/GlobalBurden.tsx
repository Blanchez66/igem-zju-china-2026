import { motion, useReducedMotion } from "motion/react";
import { useStory } from "./StoryContext";
const asset = `${import.meta.env.BASE_URL}images/home/`;
export default function GlobalBurden({
  stage,
  progress,
}: {
  stage: number;
  progress: number;
}) {
  const reduced = useReducedMotion();
  const { active } = useStory();
  const entrance = (delay: number) => ({
    duration: reduced || !active ? 0 : 1.1,
    delay: reduced || !active ? 0 : delay,
    ease: "easeOut" as const,
  });
  const statProgress = reduced ? Number(stage >= 2) : progress;
  const count = Math.round(595000000 * (1 - Math.pow(1 - statProgress, 3)));
  return (
    <div className="global-burden" data-node-id="186:270">
      <motion.div
        className="burden-heading"
        initial={false}
        animate={{ opacity: active ? 1 : 0, y: active || reduced ? 0 : 12 }}
        transition={entrance(0)}
      >
        <p className="home-eyebrow">GLOBAL BURDEN</p>
        <h2>
          When everyday
          <br />
          movement hurts
        </h2>
      </motion.div>
      <motion.div
        className="burden-map-card"
        initial={false}
        animate={{ opacity: active ? 0.9 : 0, y: active || reduced ? 0 : 12 }}
        transition={entrance(0.12)}
      />
      <motion.div
        className="burden-map"
        initial={false}
        animate={{
          opacity: active ? (stage >= 2 ? 0.38 : 1) : 0,
          y: active || reduced ? 0 : 12,
        }}
        transition={entrance(stage === 0 ? 0.22 : 0)}
      >
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
      </motion.div>
      <motion.div
        className="burden-person"
        aria-hidden={stage < 1}
        initial={false}
        animate={{ opacity: stage >= 1 ? 1 : 0, x: stage >= 1 ? 0 : -28 }}
        transition={{ duration: reduced ? 0 : 0.6, ease: "easeOut" }}
      >
        <img
          src={`${asset}1530e.png`}
          alt="A person experiencing knee pain while climbing stairs"
          loading="lazy"
        />
      </motion.div>
      <div
        className="burden-stat"
        aria-hidden={stage < 2}
        style={{
          opacity: Math.min(1, statProgress * 3),
          transform: `translateY(${34 * (1 - statProgress)}px) scale(${0.96 + 0.04 * statProgress})`,
        }}
      >
        <strong aria-label="595000000">{count}</strong>
        <p>people worldwide live with osteoarthritis</p>
      </div>
      <motion.p
        className="burden-source"
        initial={false}
        animate={{ opacity: active ? 1 : 0 }}
        transition={entrance(0.3)}
      >
        IHME GBD 2023 · global prevalence
      </motion.p>
    </div>
  );
}
