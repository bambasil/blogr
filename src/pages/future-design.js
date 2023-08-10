import "./future-design.css";
import illEditor from "../assets/illustration-editor-desktop.png";
import illEditor2 from "../assets/illustration-editor-mobile.png"

function Futuredesign() {
  return (
    <div className="container">
      <h1 className="header-one">Designed for the future</h1>
      <div className="display">
        <div className="body">
          <div>
            <h1 className="header-two">Introducing an extensible editor</h1>
            <p>
              This is a random paragraph for the first header This is a random
              paragraph for the first header This is a random paragraph for the
              first header This is a random paragraph for the first header
            </p>
          </div>
          <div>
            <h1 className="header-two">Robust content management</h1>
            <p>
              This is a random paragraph for the first header This is a random
              paragraph for the first header This is a random paragraph for the
              first header This is a random paragraph for the first header
            </p>
          </div>
        </div>
        <div className="image-parent">
          <img className="img-one" src={illEditor}/>
          <img className="img-two" src={illEditor2} />
        </div>
      </div>
    </div>
  );
}

export default Futuredesign;
