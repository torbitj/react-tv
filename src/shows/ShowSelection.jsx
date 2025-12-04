import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({shows, setSelectedShow}) {
  return (
    <nav className="shows">
      {shows.map((show) => {
        <a href="#" className="show" key={show.title} onClick={() => {
          setSelectedShow(show);
        }}>
          {show.title}
        </a>;
      })}
    </nav>
  );
}
