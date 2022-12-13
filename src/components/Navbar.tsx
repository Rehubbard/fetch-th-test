import { NavLink } from "react-router-dom";
import eggnogLogo from "../assets/eggnog.png";

type LinkProps = { to: string; label: string };
const Link = ({ to, label }: LinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-emerald-200 mr-8 underline hover:text-emerald-400"
          : "text-emerald-200 mr-8 hover:text-emerald-400"
      }
    >
      {label}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <div className="h-24 bg-emerald-900 flex items-center justify-between px-6">
      <img src={eggnogLogo} alt="Eggnog logo" className="h-12 w-12" />
      <div className="flex flex-1 items-center justify-end">
        <Link to="/" label="Home" />
        <Link to="/join" label="Join" />
      </div>
    </div>
  );
};

export default Navbar;
