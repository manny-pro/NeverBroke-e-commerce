import NLink from "react-router-dom";
import { AiOutlineUser, AiOutlineShop, AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import user from '../user';

export default function NavBar() {
  return (
    <div>
        <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
        <label htmlFor="menu-icon" />
        <nav className="nav"> 		
          <ul className="pt-5">
            <li>
            <div className="User"> <a href="/App"> <AiOutlineUser /></a>
            </div></li>
            <li><div className="Home"> <a href="/Home"> <AiOutlineShop /></a>
            </div></li>
            <li>
            <div className="Shop"> <a href="/panier"> <AiOutlineShoppingCart /></a>
            </div></li>
          </ul>
        </nav>
      </div>
  );
}
