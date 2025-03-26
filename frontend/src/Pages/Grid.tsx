import { useEffect } from "react";
import { useFilmStore } from "../Stores/store";
import NoData from "../Components/NoData";

const Grid = () => {
  const toggleSelection = useFilmStore((state) => state.toggleSelection);
  const films = useFilmStore((state) => state.films);
  const setFilms = useFilmStore((state) => state.setFilms);

  useEffect(() => {
    setFilms();
  }, []);

  useEffect(() => {
    setFilms();
  }, [films]);

  if (films.length === 0) {
    console.log("State is empty");
    return <NoData />;
  }

  return (
    <>
      <section className="showcase padding">
        <section className="nes-container with-title">
          <h2 className="title ">Grid</h2>

          <div className="container mt-4">
            <div className="row">
              {films.map((FilmData) => (
                <div
                  key={FilmData.ID}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 "
                  id="Balls"
                >
                  <div className="nes-container with-title is-centered">
                    <p className="title">{FilmData.name}</p>
                    <div className="card-body" id="GridDiv">
                      {" "}
                      <div className="image-item">
                        <img src={FilmData.URL} alt="Film" />
                      </div>
                      <p className="card-text">{FilmData.category}</p>
                      <p className="card-text">{FilmData.price}.00 $</p>
                      <label>
                        <input
                          type="checkbox"
                          className="nes-checkbox"
                          onChange={() => toggleSelection(FilmData.ID)}
                        />
                        <span>Delete</span>
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Grid;
