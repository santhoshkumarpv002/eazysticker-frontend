import { faShoppingCart, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container">
        <a href="/" className="link">
          <FontAwesomeIcon icon={faTags} className="fa-icon" /> EazyBytes
        </a>
        <nav className="nav">
          <ul>
            <li>
              <a href="https://www.youtube.com/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" className="nav-link">
                Login
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;

