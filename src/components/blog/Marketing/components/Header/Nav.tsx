import { useState } from "react";
import MenuIcon from "~/components/icons/Menu";

function Links() {
  return (
    <div className="flex flex-wrap text-white">
      <a className="block pr-4" href={"/login"}>
        Login
      </a>
      <a className="block pr-2" href={"/register"}>
        Sign Up
      </a>
    </div>
  );
}

export default function Nav() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav>
      <div className="hidden sm:flex">
        <Links />
      </div>
      <div className="relative sm:hidden">
        <div className="text-white">
          <button className="btn-icon" onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon />
          </button>
        </div>
        {showMenu && (
          <div className="absolute right-0 top-10 z-50 rounded bg-black p-2 shadow-xl">
            <Links />
          </div>
        )}
      </div>
    </nav>
  );
}
