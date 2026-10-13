import layers from "./figmaProcessLayers.json";
import "./FigmaProcessContent.css";

/** Layer positions follow Figma 657:9 in its original 1366 × 6934 coordinate space. */
export default function FigmaProcessContent() {
  return (
    <article
      className="figma-process"
      data-node-id="657:9"
      aria-label="NEST materials and hydrogel"
    >
      <div aria-hidden="true">
        {layers.map((layer, index) => (
          <div
            key={`${layer.id}-${index}`}
            className="figma-process-layer"
            data-node-id={layer.id}
            style={{
              left: layer.x,
              top: layer.y,
              width: layer.width,
              height: layer.height,
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/home/materials/${layer.file}`}
              alt=""
              draggable={false}
              style={{
                transform: `scale(${layer.scaleX}, ${layer.scaleY})`,
                transformOrigin: "top left",
              }}
              {...(!layer.file.endsWith(".svg")
                ? { width: layer.width, height: layer.height }
                : {})}
            />
          </div>
        ))}
      </div>
      <div className="visually-hidden">
        <h2>Limitations of the materials</h2>
        <ul>
          <li>Barriers to large-scale production</li>
          <li>Challenges for clinical application</li>
          <li>Cannot overcome the confined microenvironment</li>
        </ul>
        <h2>So, we created……</h2>
        <h2>No single solution fits all</h2>
      </div>
      <div className="figma-process-copy">
        <h2>
          Hydrogel materials show great potential
          <br />
          for addressing this challenge.
        </h2>
        <p>
          Biomimetic hydrogels have emerged as suitable filling materials. In
          addition to their excellent moldability, which enables them to conform
          to irregular defects, they can closely mimic the physicochemical and
          biological properties of the natural extracellular matrix (ECM). They
          provide cells with three-dimensional structural support, helping
          maintain tissue mechanical function and microenvironmental
          homeostasis.
        </p>
      </div>
    </article>
  );
}
