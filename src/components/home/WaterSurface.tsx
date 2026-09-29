/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { setup, render } from "./water-shader";

/** Adapter for the original Figma WGSL shader; a gradient remains if WebGPU is unavailable. */
export function WaterSurface() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let disposed = false;
    let observer: ResizeObserver | undefined;
    let device: any;
    const frame: any = {
      state: {},
      params: {
        center: { x: 50, y: 50 },
        scale: 1,
        playhead: 0,
        highlightColor: { r: 0.804, g: 0.961, b: 1, a: 1 },
        waterColor: { r: 0, g: 0.388, b: 0.706, a: 1 },
        intensity: 0.5,
      },
    };
    const start = async () => {
      const gpu = (navigator as Navigator & { gpu?: any }).gpu;
      const adapter = await gpu?.requestAdapter();
      if (!adapter || disposed) return;
      device = await adapter.requestDevice();
      if (disposed) {
        device.destroy();
        return;
      }
      const canvas = ref.current;
      const context = canvas?.getContext("webgpu") as any;
      if (!canvas || !context) return;
      const format = gpu.getPreferredCanvasFormat();
      context.configure({ device, format, alphaMode: "premultiplied" });
      setup(device, frame);
      const draw = () => {
        if (disposed) return;
        canvas.width = Math.max(
          1,
          Math.round(canvas.clientWidth * Math.min(devicePixelRatio, 2)),
        );
        canvas.height = Math.max(
          1,
          Math.round(canvas.clientHeight * Math.min(devicePixelRatio, 2)),
        );
        frame.output = context.getCurrentTexture();
        render(device, frame);
      };
      observer = new ResizeObserver(draw);
      observer.observe(canvas);
      draw();
    };
    void start().catch(() => {
      /* Keep the authored gradient on unsupported devices. */
    });
    return () => {
      disposed = true;
      observer?.disconnect();
      frame.state.quad?.destroy();
      frame.state.uniformBuf?.destroy();
      device?.destroy();
    };
  }, []);
  return <canvas ref={ref} className="home-water" aria-hidden="true" />;
}
