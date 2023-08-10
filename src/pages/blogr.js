import "./blogr.css";
import { useState } from "react";
import Primarybutton from "../components/primary-button";
import Secondarybutton from "../components/secondary-button";
import { MdNavigateNext } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Blogr() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  console.log(isNavbarOpen)
  function onBurgerClickHandler() {
    setIsNavbarOpen(true);
  }

  function onXClickHandler() {
    setIsNavbarOpen(false);
  }

  const mobileNavbarClasses =
    isNavbarOpen === true ? "mobile-navbar transition" : "hidden-two mobile-navbar";
  const mobileXIconClasses =
    isNavbarOpen === true ? "burger-icon close-icon" : "close-icon-hidden";

  const hamburgerClasses = 
    isNavbarOpen === false ? "burger-icon" :"hidden"


  return (
    <body className="blogr-container">
      <nav className="blogr-header">
        <div class="flex">
          <h1>Blogr</h1>
          <ul className="blogr-list hidden">
            <li>
              <a class="flex">
                Product <MdNavigateNext className="arrow-down-icon" />
              </a>
            </li>
            <li>
              <a class="flex">
                Company
                <MdNavigateNext className="arrow-down-icon" />
              </a>
            </li>
            <li>
              <a class="flex">
                Connect
                <MdNavigateNext className="arrow-down-icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className={mobileNavbarClasses}>
          <ul className="blogr-list-two">
            <h1>Blogr</h1>
            <li>
              <a class="flex">Product</a>
            </li>
            <li>
              <a class="flex">Company</a>
            </li>
            <li>
              <a class="flex">Connect</a>
            </li>
            <li>
              <a>Sign Up</a>
            </li>
          </ul>
        </div>
        <div className="hidden">
          <Primarybutton title={"Sign up"} />
        </div>
        <GiHamburgerMenu
          onClick={onBurgerClickHandler}
          className={hamburgerClasses}
        />
        <AiOutlineClose
          className={mobileXIconClasses}
          onClick={onXClickHandler}
        />
      </nav>
      <div className="blogr-body">
        <h1 className="blogr-h1">A modern publishing platform</h1>
        <p className="blogr-p">
          Grow your audience and build your online brand
        </p>
        <div className="button-container">
          <Primarybutton title={"Start for Free"} />
          <Secondarybutton title={"Learn more"} />
        </div>
      </div>
    </body>
  );
}

export default Blogr;
