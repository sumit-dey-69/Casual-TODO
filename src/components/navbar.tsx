import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="flex gap-2 bg-neutral-800 justify-around py-3 *:text-blue-600">
      <Link to="/">Casual Todo App</Link>
    </nav>
  );
}

export default navbar;
