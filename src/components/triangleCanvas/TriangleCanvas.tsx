import { createRef, useEffect, CSSProperties } from "react";
import TriangleManager from "./TriangleManager";

interface IProps {
  width?: number;
  height?: number;
  fullscreen?: boolean;
  style?: CSSProperties;
}

const TriangleCanvas: React.FC<IProps> = ({
  width = 512,
  height = 512,
  fullscreen,
  style
}) => {
  const canvasContainer = createRef<HTMLDivElement>();

  useEffect(() => {
    const triangleManager = new TriangleManager(
      fullscreen ? window.innerWidth : width,
      fullscreen ? window.innerHeight : height
    );
    canvasContainer.current.appendChild(triangleManager.app.view);
    return () => {
      triangleManager.stop();
    };
  }, []);

  return (
    <div className="triangle-canvas" style={style} ref={canvasContainer}></div>
  );
};

export default TriangleCanvas;
