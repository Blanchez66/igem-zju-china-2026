import { Link } from "react-router-dom";
import "./NotFound.css";

export function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="not-found-title">
        404
      </h1>
      <div className="my-5">
        <Link to="/" className="btn btn-secondary btn-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
