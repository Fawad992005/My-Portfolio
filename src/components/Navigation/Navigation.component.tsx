import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="flex p-5 justify-between">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
          Fawad Ahmed
        </div>
        <div>
          <ul className="flex gap-16 tabs tabs-bordered" role="tablist">
            <li>
              <Link
                to="/"
                role="tab"
                className="tab tab-bordered font-semibold text-lg border-green-500 hover:text-green-500 hover:border-green-500 tab-active:text-green-500 tab-active:border-green-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                role="tab"
                className="tab tab-bordered font-semibold text-lg border-green-500 hover:text-green-500 hover:border-green-500 tab-active:text-green-500 tab-active:border-green-500"
              >
                About Me
              </Link>
            </li>

            <li>
              <Link
                to="/skills"
                role="tab"
                className="tab tab-bordered font-semibold text-lg border-green-500 hover:text-green-500 hover:border-green-500 tab-active:text-green-500 tab-active:border-green-500"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                role="tab"
                className="tab tab-bordered font-semibold text-lg border-green-500 hover:text-green-500 hover:border-green-500 tab-active:text-green-500 tab-active:border-green-500"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                role="tab"
                className="tab tab-bordered font-semibold text-lg border-green-500 hover:text-green-500 hover:border-green-500 tab-active:text-green-500 tab-active:border-green-500"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
