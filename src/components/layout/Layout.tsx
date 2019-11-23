import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import dynamic from "next/dynamic";
const TriangleCanvas = dynamic(import("../triangleCanvas/TriangleCanvas"), {
  ssr: false
});

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="main text-white" style={{ overflow: "none" }}>
        <Header></Header>
        {children}
        <Footer></Footer>

        <style jsx global>{`
          .main {
            min-height: 100vh;
            display: grid;
            grid-template-rows: 80px 1fr 80px;
            z-index: 0;
          }
          body {
            background-color: #1e1e1e;
          }
          .triangle-canvas {
            animation: 10s ease-in fadein;
          }
          @keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
      <TriangleCanvas
        fullscreen={true}
        style={{
          top: "0px",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1
        }}
      ></TriangleCanvas>
    </>
  );
};

export default Layout;
