import { Link } from "react-router";
import LogoWhite from "../assets/images/logo-white.png";
import "./NotFoundPage.css";

export function NotFoundPage() {
  return (
    <>
      <title>404 Not Found</title>

      <div className="not-found-header">
        <Link to="/" className="header-link">
          <img className="logo" src={LogoWhite} alt="Logo" />
        </Link>
      </div>

      <div className="not-found-page">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>
          You can go back to the <Link to="/">home page</Link>.
        </p>
      </div>
    </>
  );
}
