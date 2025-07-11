import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        Build with
        <FontAwesomeIcon
          icon={faHeart}
          className="footer-icon"
          aria-hidden="true"
        />
        By
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          EazyBytes
        </a>
      </footer>
    </>
  );
}
