import { Link, useLocation } from "react-router-dom";
import { useFilmStore } from "../stores";

const NavBar: React.FC = () => {
  const toggleDelete = useFilmStore((state) => state.toggleDelete);
  const toggleSave = useFilmStore((state) => state.toggleSave);
  const location = useLocation();

  function handleDelete() {
    toggleDelete();
  }

  return (
    <section className="showcase">
      <nav className="nes-container is-dark">
        <div className="row">
          <div className="col ">
            <h2 className="nes-text ">Film Store Database</h2>

            {location.pathname === "/" ? (
              <div className="padding">
                <Link to="/Form">
                  <button className="nes-btn">ADD</button>
                </Link>{" "}
                <button
                  onClick={() => handleDelete()}
                  className="nes-btn is-error "
                >
                  Mass delete
                </button>
              </div>
            ) : (
              <div className="padding showcase">
                <button className="nes-btn ">Save</button>{" "}
                <Link to="/">
                  <button className="nes-btn is-error">Cancel</button>
                </Link>
              </div>
            )}
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
      </nav>
    </section>
  );
};

export default NavBar;
