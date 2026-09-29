import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { homeMotion } from "./motion";

/** All layers mount together, sharing the exported 4.5 second looping timeline. */
export function AnimatedLayer({
  nodeId,
  children,
  ...props
}: HTMLMotionProps<"div"> & { nodeId: string }) {
  const reduced = useReducedMotion();
  const animation = homeMotion[nodeId];
  const resting =
    nodeId === "227:18"
      ? { opacity: 0 }
      : { opacity: 1, x: 0, y: 0, scaleX: 1, scaleY: 1 };
  return (
    <motion.div
      {...props}
      {...(reduced ? { initial: false, animate: resting } : animation)}
    >
      {children}
    </motion.div>
  );
}
