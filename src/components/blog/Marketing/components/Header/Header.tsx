import Logo from "../Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-black">
      <div className="lud-container p-2 xl:px-4">
        <div className="flex items-center justify-between">
          <div className="flex-grow">
            <Logo />
          </div>
          <div>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
}
