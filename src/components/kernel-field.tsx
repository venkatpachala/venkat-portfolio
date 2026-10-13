import { useEffect, useRef } from "react";

export function KernelField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const drawContext = node.getContext("2d");
    if (!drawContext) return;
    const view = node;
    const pen = drawContext;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const points: [number, number, number][] = [];
    const edges: [number, number][] = [];
    for (let x = -3; x <= 3; x += 1) {
      for (let y = -2; y <= 2; y += 1) {
        for (let z = -2; z <= 2; z += 1) {
          points.push([x * 1.15, y * 1.15, z * 1.15]);
        }
      }
    }
    const strideZ = 5;
    const strideY = 25;
    points.forEach((_, index) => {
      const z = index % strideZ;
      const y = Math.floor(index / strideZ) % 5;
      if (z < strideZ - 1) edges.push([index, index + 1]);
      if (y < 4) edges.push([index, index + strideZ]);
      if (index + strideY < points.length) edges.push([index, index + strideY]);
    });

    let raf = 0;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      view.width = Math.floor(window.innerWidth * ratio);
      view.height = Math.floor(window.innerHeight * ratio);
      view.style.width = `${window.innerWidth}px`;
      view.style.height = `${window.innerHeight}px`;
    }

    function draw(time: number) {
      const ratio = view.width / window.innerWidth;
      const dark = document.documentElement.classList.contains("dark");
      pen.setTransform(ratio, 0, 0, ratio, 0, 0);
      pen.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (!dark) return;

      const t = reduce ? 0.4 : time * 0.00008;
      const yaw = t;
      const pitch = 0.35 + Math.sin(t * 0.7) * 0.08;
      const cy = Math.cos(yaw);
      const sy = Math.sin(yaw);
      const cx = Math.cos(pitch);
      const sx = Math.sin(pitch);
      const width = window.innerWidth;
      const height = window.innerHeight;
      const projected = points.map(([x, y, z]) => {
        const x1 = x * cy - z * sy;
        const z1 = x * sy + z * cy;
        const y1 = y * cx - z1 * sx;
        const z2 = y * sx + z1 * cx;
        const scale = 280 / (z2 + 8.5);
        return { x: width * 0.62 + x1 * scale * 42, y: height * 0.42 + y1 * scale * 42, z: z2 };
      });

      pen.lineWidth = 1;
      for (const [i, j] of edges) {
        pen.strokeStyle = "rgba(255,255,255,0.05)";
        pen.beginPath();
        pen.moveTo(projected[i].x, projected[i].y);
        pen.lineTo(projected[j].x, projected[j].y);
        pen.stroke();
      }

      for (const point of projected) {
        const size = Math.max(1.2, 3.2 - point.z * 0.35);
        pen.fillStyle = "rgba(255,255,255,0.16)";
        pen.fillRect(point.x - size / 2, point.y - size / 2, size, size);
      }
    }

    function loop(time: number) {
      draw(time);
      if (!reduce) raf = window.requestAnimationFrame(loop);
    }

    resize();
    raf = window.requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="kernel-field" />;
}
