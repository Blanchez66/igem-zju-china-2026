import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { homeMotion } from "./motion";
import { useStory } from "./StoryContext";
import { pipelinePosition } from "./pipelinePath";

export function AnimatedLayer({
  nodeId,
  children,
  ...props
}: HTMLMotionProps<"div"> & { nodeId: string }) {
  const reduced = useReducedMotion();
  const { active, pipelineStep, pipelineProgress } = useStory();
  const animation = homeMotion[nodeId];
  const resting =
    nodeId === "227:18"
      ? { opacity: 0 }
      : { opacity: 1, x: 0, y: 0, scaleX: 1, scaleY: 1 };
  if (pipelineStep >= 0) {
    const { x, y } = pipelinePosition(pipelineProgress);
    return (
      <motion.div
        {...props}
        initial={false}
        style={{
          ...props.style,
          x,
          y,
          opacity: nodeId === "232:52" ? 0.2 : 1,
          rotate: 0,
        }}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      key={active ? "active" : "idle"}
      {...props}
      {...(reduced
        ? { initial: false, animate: resting }
        : active
          ? animation
          : {
              initial: false,
              animate: animation?.initial as HTMLMotionProps<"div">["animate"],
            })}
    >
      {children}
    </motion.div>
  );
}
