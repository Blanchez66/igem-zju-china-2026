// Offsets along the actual pipe, including its rounded elbows.
const legs = [
  [
    [0, 0],
    [494.98, 0],
    [523.3, 6.5],
    [533.27, 28],
    [533.27, 672],
    [526.3, 693.5],
    [494.98, 700],
  ],
  [
    [494.98, 700],
    [-98.45, 700],
    [-129.7, 706.5],
    [-136.73, 728],
    [-136.73, 1392],
    [-129.7, 1413.5],
    [-98.45, 1420],
  ],
  [
    [-98.45, 1420],
    [494.98, 1420],
    [526.3, 1426.5],
    [533.27, 1448],
    [533.27, 2112],
    [526.3, 2133.5],
    [494.98, 2140],
  ],
  [
    [494.98, 2140],
    [51.96, 2140],
    [20.3, 2146.5],
    [13.67, 2168],
    [13.67, 2790],
  ],
];
const paths = legs.map((points) => {
  const distances = [0];
  for (let i = 1; i < points.length; i++) {
    distances.push(
      distances[i - 1] +
        Math.hypot(
          points[i][0] - points[i - 1][0],
          points[i][1] - points[i - 1][1],
        ),
    );
  }
  return { points, distances, length: distances[distances.length - 1] };
});

/** One shared position for every clipped slice; interpolation is reversible. */
export function pipelinePosition(progress: number) {
  const clamped = Math.max(0, Math.min(4, progress));
  const leg = Math.min(3, Math.floor(clamped));
  const { points, distances, length } = paths[leg];
  const distance = (clamped - leg) * length;
  const end = Math.max(
    1,
    distances.findIndex((value) => value >= distance),
  );
  const index = distance >= length ? points.length - 1 : end;
  const t = Math.min(
    1,
    (distance - distances[index - 1]) /
      (distances[index] - distances[index - 1]),
  );
  return {
    x: points[index - 1][0] + (points[index][0] - points[index - 1][0]) * t,
    y: points[index - 1][1] + (points[index][1] - points[index - 1][1]) * t,
  };
}
