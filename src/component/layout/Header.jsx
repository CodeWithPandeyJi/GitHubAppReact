import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function Header({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-gray-600 text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-3 text-3xl" size={40} />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-accent btn-sm rounded-btn mr-2">
              Home
            </Link>
            <Link to="/about" className="btn btn-info btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
Header.defaultProps = {
  title: "GitHub App",
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;