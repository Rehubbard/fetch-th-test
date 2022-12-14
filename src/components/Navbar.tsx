import { NavLink } from "react-router-dom";
import eggnogLogo from "../assets/eggnog.png";

type LinkProps = { to: string; label: string };
const Link = ({ to, label }: LinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-pink-400 mr-8 hover:underline"
          : "text-emerald-50 mr-8 hover:underline"
      }
    >
      {label}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <div className="h-24 bg-gradient-to-r from-emerald-900 to-teal-800 flex items-center justify-between px-6">
      <img src={eggnogLogo} alt="Eggnog logo" className="h-12 w-12" />
      <div className="flex flex-1 items-center justify-end">
        <Link to="/" label="Home" />
        <Link to="/sign-up" label="Sign up" />
      </div>
    </div>
  );
};

export default Navbar;
