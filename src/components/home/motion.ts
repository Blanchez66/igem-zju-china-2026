import type { HTMLMotionProps } from "motion/react";
export const homeMotion: Record<string, HTMLMotionProps<"div">> = {
  "218:10": {
    initial: { opacity: 1 },
    animate: { opacity: [1, 1, 0.38, 0.38] },
    transition: {
      opacity: {
        duration: 4.5,
        times: [0, 0.1667, 0.3667, 1],
        ease: ["linear", "easeInOut", "linear"],
        repeat: 0,
      },
    },
  },
  "218:844": {
    initial: { opacity: 0, x: -28 },
    animate: { opacity: [0, 0, 1, 1], x: [-28, -28, 0, 0] },
    transition: {
      opacity: {
        duration: 4.5,
        times: [0, 0.0556, 0.1889, 1],
        ease: ["linear", "easeOut", "linear"],
        repeat: 0,
      },
      x: {
        duration: 4.5,
        times: [0, 0.0556, 0.1889, 1],
        ease: ["linear", "easeOut", "linear"],
        repeat: 0,
      },
    },
  },
  "217:848": {
    initial: { opacity: 0, scaleX: 0.96, scaleY: 0.96, y: 34 },
    animate: {
      opacity: [0, 0, 1, 1],
      scaleX: [0.96, 0.96, 1, 1],
      scaleY: [0.96, 0.96, 1, 1],
      y: [34, 34, 0, 0],
    },
    transition: {
      opacity: {
        duration: 4.5,
        times: [0, 0.2222, 0.3889, 1],
        ease: ["linear", "easeOut", "linear"],
        repeat: 0,
      },
      scaleX: {
        duration: 4.5,
        times: [0, 0.2222, 0.3889, 1],
        ease: [
          "linear",
          (t) =>
            1 -
            Math.exp(-t * 7.6657) *
              (Math.cos(t * 6.7605) + 1.1339 * Math.sin(t * 6.7605)),
          "linear",
        ],
        repeat: 0,
      },
      scaleY: {
        duration: 4.5,
        times: [0, 0.2222, 0.3889, 1],
        ease: [
          "linear",
          (t) =>
            1 -
            Math.exp(-t * 7.6657) *
              (Math.cos(t * 6.7605) + 1.1339 * Math.sin(t * 6.7605)),
          "linear",
        ],
        repeat: 0,
      },
      y: {
        duration: 4.5,
        times: [0, 0.2222, 0.3889, 1],
        ease: ["linear", "easeOut", "linear"],
        repeat: 0,
      },
    },
  },
  "227:17": {
    initial: { opacity: 0, scaleX: 0.92, scaleY: 0.92, y: 28 },
    animate: {
      opacity: [0, 0, 1, 1],
      scaleX: [0.92, 0.92, 1, 1],
      scaleY: [0.92, 0.92, 1, 1],
      y: [28, 28, 0, 0],
    },
    transition: {
      opacity: {
        duration: 4.5,
        times: [0, 0.44, 0.5511, 1],
        ease: ["linear", "easeOut", "linear"],
        repeat: 0,
      },
      scaleX: {
        duration: 4.5,
        times: [0, 0.44, 0.5667, 1],
        ease: [
          "linear",
          (t) =>
            1 -
            Math.exp(-t * 7.6657) *
              (Math.cos(t * 6.7605) + 1.1339 * Math.sin(t * 6.7605)),
          "linear",
        ],
        repeat: 0,
      },
      scaleY: {
        duration: 4.5,
        times: [0, 0.44, 0.5667, 1],
        ease: [
          "linear",
          (t) =>
            1 -
            Math.exp(-t * 7.6657) *
              (Math.cos(t * 6.7605) + 1.1339 * Math.sin(t * 6.7605)),
          "linear",
        ],
        repeat: 0,
      },
      y: {
        duration: 4.5,
        times: [0, 0.44, 0.5667, 1],
        ease: [
          "linear",
          (t) =>
            1 -
            Math.exp(-t * 7.6657) *
              (Math.cos(t * 6.7605) + 1.1339 * Math.sin(t * 6.7605)),
          "linear",
        ],
        repeat: 0,
      },
    },
  },
  "227:18": {
    initial: { opacity: 1, rotate: 16, x: 543.448, y: -328.214 },
    animate: {
      opacity: [1, 1, 0, 0],
      rotate: [16, 16, -7, 0, 0],
      x: [543.448, 543.448, 341.505, 0, 0],
      y: [-328.214, -328.214, -105.21, 0, 0],
    },
    transition: {
      opacity: {
        duration: 4.5,
        times: [0, 0.4578, 0.5111, 1],
        ease: ["linear", "easeInOut", "linear"],
        repeat: 0,
      },
      rotate: {
        duration: 4.5,
        times: [0, 0.1333, 0.3, 0.4778, 1],
        ease: [
          "linear",
          "easeInOut",
          (t) =>
            1 -
            Math.exp(-t * 7.6657) *
              (Math.cos(t * 6.7605) + 1.1339 * Math.sin(t * 6.7605)),
          "linear",
        ],
        repeat: 0,
      },
      x: {
        duration: 4.5,
        times: [0, 0.1333, 0.3, 0.4778, 1],
        ease: [
          "linear",
          "easeInOut",
          (t) =>
            1 -
            Math.exp(-t * 7.6657) *
              (Math.cos(t * 6.7605) + 1.1339 * Math.sin(t * 6.7605)),
          "linear",
        ],
        repeat: 0,
      },
      y: {
        duration: 4.5,
        times: [0, 0.1333, 0.3, 0.4778, 1],
        ease: [
          "linear",
          "easeInOut",
          (t) =>
            1 -
            Math.exp(-t * 7.6657) *
              (Math.cos(t * 6.7605) + 1.1339 * Math.sin(t * 6.7605)),
          "linear",
        ],
        repeat: 0,
      },
    },
  },
  "227:19": {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: [0, 0, 1, 1], y: [12, 12, 0, 0] },
    transition: {
      opacity: {
        duration: 4.5,
        times: [0, 0.4933, 0.6178, 1],
        ease: ["linear", "easeOut", "linear"],
        repeat: 0,
      },
      y: {
        duration: 4.5,
        times: [0, 0.4933, 0.6178, 1],
        ease: [
          "linear",
          (t) =>
            1 -
            Math.exp(-t * 7.6657) *
              (Math.cos(t * 6.7605) + 1.1339 * Math.sin(t * 6.7605)),
          "linear",
        ],
        repeat: 0,
      },
    },
  },
  "232:52": {
    initial: { opacity: 0.25, x: 0, y: 0 },
    animate: {
      opacity: [0.25, 0.1],
      x: [
        0, 494.98, 523.3, 533.27, 533.27, 526.3, 494.98, -98.45, -129.7,
        -136.73, -136.73, -129.7, -98.45, 494.98, 526.3, 533.27, 533.27, 526.3,
        494.98, 51.96, 20.3, 13.67, 13.67,
      ],
      y: [
        0, 0, 6.5, 28, 672, 693.5, 700, 700, 706.5, 728, 1392, 1413.5, 1420,
        1420, 1426.5, 1448, 2112, 2133.5, 2140, 2140, 2146.5, 2168, 2790,
      ],
    },
    transition: {
      opacity: {
        duration: 4.5,
        times: [0, 1],
        ease: "easeOut",
        repeat: 0,
      },
      x: {
        duration: 4.5,
        times: [
          0, 0.0978, 0.1044, 0.1089, 0.2356, 0.24, 0.2444, 0.3622, 0.3689,
          0.3733, 0.5044, 0.5089, 0.5133, 0.6311, 0.6378, 0.6422, 0.7733,
          0.7778, 0.7822, 0.8711, 0.8756, 0.88, 1,
        ],
        ease: "linear",
        repeat: 0,
      },
      y: {
        duration: 4.5,
        times: [
          0, 0.0978, 0.1044, 0.1089, 0.2356, 0.24, 0.2444, 0.3622, 0.3689,
          0.3733, 0.5044, 0.5089, 0.5133, 0.6311, 0.6378, 0.6422, 0.7733,
          0.7778, 0.7822, 0.8711, 0.8756, 0.88, 1,
        ],
        ease: "linear",
        repeat: 0,
      },
    },
  },
  "232:51": {
    initial: { rotate: 2, x: 0, y: 0 },
    animate: {
      rotate: [
        2, -1, -2, -1, 1, 2, 1, -1, -2, -1, 1, 2, 1, -1, -2, -1, 1, 2, 1, -1,
        -2, -1, 0,
      ],
      x: [
        0, 494.98, 523.3, 533.27, 533.27, 526.3, 494.98, -98.45, -129.7,
        -136.73, -136.73, -129.7, -98.45, 494.98, 526.3, 533.27, 533.27, 526.3,
        494.98, 51.96, 20.3, 13.67, 13.67,
      ],
      y: [
        0, 0, 6.5, 28, 672, 693.5, 700, 700, 706.5, 728, 1392, 1413.5, 1420,
        1420, 1426.5, 1448, 2112, 2133.5, 2140, 2140, 2146.5, 2168, 2790,
      ],
    },
    transition: {
      rotate: {
        duration: 4.5,
        times: [
          0, 0.0978, 0.1044, 0.1089, 0.2356, 0.24, 0.2444, 0.3622, 0.3689,
          0.3733, 0.5044, 0.5089, 0.5133, 0.6311, 0.6378, 0.6422, 0.7733,
          0.7778, 0.7822, 0.8711, 0.8756, 0.88, 1,
        ],
        ease: "linear",
        repeat: 0,
      },
      x: {
        duration: 4.5,
        times: [
          0, 0.0978, 0.1044, 0.1089, 0.2356, 0.24, 0.2444, 0.3622, 0.3689,
          0.3733, 0.5044, 0.5089, 0.5133, 0.6311, 0.6378, 0.6422, 0.7733,
          0.7778, 0.7822, 0.8711, 0.8756, 0.88, 1,
        ],
        ease: "linear",
        repeat: 0,
      },
      y: {
        duration: 4.5,
        times: [
          0, 0.0978, 0.1044, 0.1089, 0.2356, 0.24, 0.2444, 0.3622, 0.3689,
          0.3733, 0.5044, 0.5089, 0.5133, 0.6311, 0.6378, 0.6422, 0.7733,
          0.7778, 0.7822, 0.8711, 0.8756, 0.88, 1,
        ],
        ease: "linear",
        repeat: 0,
      },
    },
  },
};
