import dynamic from "next/dynamic";
const TriangleCanvas = dynamic(
  import("../components/triangleCanvas/TriangleCanvas"),
  { ssr: false }
);

export default () => (
  <div>
    <TriangleCanvas fullscreen={true} />
  </div>
);
