import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineShop } from "react-icons/ai";
import { user } from './user';

export function NavBar() {
  return (
    <div>
        <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
        <label htmlFor="menu-icon" />
        <nav className="nav"> 		
          <ul className="pt-5">
            <li>
            <div className="User"> <AiOutlineUser />
            </div></li>
            <li><div className="Shop"><AiOutlineShop /></div></li>
          </ul>
        </nav>
      </div>
  );
}
