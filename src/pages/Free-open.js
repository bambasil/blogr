import react from "react";
import "./free-open.css";
import illLaptop from "../assets/illustration-laptop-desktop.png";
import illLaptop2 from "../assets/illustration-laptop-mobile.png"

function Freeopen() {
  return (
    <div className="display">
      <div>
        <img className="img-one img-cuttwo image-desktop  " src={illLaptop} />
        <img className="image-mobile " src={illLaptop2} />
      </div>
      <div className="body1">
        <div>
          <h1 className="header-two">Free, open, simple</h1>
          <p>
            This is a random paragraph for the first header This is a random
            paragraph for the first header This is a random paragraph for the
            first header This is a random paragraph for the first header
          </p>
        </div>
        <div>
          <h1 className="header-two">Powerful tooling</h1>
          <p>
            This is a random paragraph for the first header This is a random
            paragraph for the first header This is a random paragraph for the
            first header This is a random paragraph for the first header
          </p>
        </div>
      </div>
    </div>
  );
}

export default Freeopen;
