import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-stone-500 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-[0.5rem]">
        Fast React Pizza Co.
      </Link>

      <SearchOrder></SearchOrder>

      <Username />
    </header>
  );
}

export default Header;
