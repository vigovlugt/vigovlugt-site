import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faReact, faJs } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const Footer = () => {
  const { setNameColor } = useContext(AppContext);

  return (
    <div className="footer d-flex container justify-content-between">
      <FontAwesomeIcon
        size="3x"
        icon={faJs}
        color="#FFE70B"
        onMouseEnter={() => setNameColor("#FFE70B")}
      />
      <img
        height="42px"
        src="/images/ts.png"
        onMouseEnter={() => setNameColor("#007ACC")}
      ></img>
      <FontAwesomeIcon
        size="3x"
        icon={faReact}
        color="#61DAFB"
        onMouseEnter={() => setNameColor("#61DAFB")}
      />
      <FontAwesomeIcon
        size="3x"
        icon={faNodeJs}
        color="#8BC500"
        onMouseEnter={() => setNameColor("#8BC500")}
      />
      <img
        height="48px"
        src="/images/dotnet-core.png"
        onMouseEnter={() => setNameColor("#6D409D")}
      ></img>
    </div>
  );
};

export default Footer;
