import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

function layout() {
  return (
    <div className="bg-black h-screen *:text-white grid grid-rows-[auto_1fr]">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default layout;
