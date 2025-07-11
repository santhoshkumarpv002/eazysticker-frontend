import { Component } from "react";

class HeaderClass extends Component {
  render() {
    return (
      <header className="bg-gray-800 text-white p-4">
        <div className="container">
          <a href="/" className="link">
            EazyBytes
          </a>
          <nav className="nav">
            <ul>
              <li>
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li>``
                <a href="/login" className="nav-link">
                  Login
                </a>
              </li>
              <li>
                <a href="/cart" className="nav-link">
                  Cart
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default HeaderClass;
