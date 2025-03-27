import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFilmStore } from "../stores";

const NavBar: React.FC = () => {
  const toggleDelete = useFilmStore((state) => state.toggleDelete);
  const location = useLocation();
  const [activeButton, setActiveButton] = useState<string>(location.pathname);

  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location.pathname]);

  function handleDelete() {
    toggleDelete();
  }
  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location.pathname]);

  return (
    <section className="showcase">
      <nav className="nes-container is-dark">
        <div className="container text-center">
          <div className="row">
            <div className="col float-start ">
              <h2 className="nes-text ">Film Store Database</h2>
              <form className="container-fluid justify-content-start">
                <Link to="/Form">
                  <button
                    className={`nes-btn  ${
                      activeButton === "/Form"
                        ? "nes-btn is-disabled"
                        : "btn-outline-success"
                    }`}
                    type="button"
                  >
                    Form
                  </button>
                </Link>
                <Link to="/">
                  <button
                    className={`nes-btn  ${
                      activeButton === "/"
                        ? "nes-btn is-disabled"
                        : "btn-outline-success"
                    }`}
                    type="button"
                  >
                    Grid
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete()}
                  className="nes-btn is-error delete-button"
                >
                  Mass delete
                </button>
              </form>
            </div>
            <div className="col d-flex justify-content-end">
              <a
                href="https://youtu.be/rIzYf13zd7M?si=IKOY4nmnrkLW1HM7&t=5412"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://media.tenor.com/C1_KkudKHM8AAAAj/mario-dance.gif"
                  height={150}
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
