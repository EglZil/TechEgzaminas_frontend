import { Link } from "react-router-dom";

export function Menu(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/create">Naujas įašas</Link>
    </div>
  );
}
