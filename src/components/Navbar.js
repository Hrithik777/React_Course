
import PropTypes from "prop-types"; 
// import {Link} from "react-router-dom"; 

function Navbar(props) {
    console.log(props);
    return (
      <>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`}>
          <div className="container-fluid">
            {/* <Link className={`navbar-brand text-${props.mode === 'light'?'dark':'light'}`} to="/about">
              {props.title}
            </Link> */}
            <a className={`navbar-brand text-${props.mode === 'light'?'dark':'light'}`} href="/">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <Link className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} to="/">
                    Home
                  </Link> */}
                  <a className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to="/about">
                    {props.aboutText}
                  </Link> */}
                  <a className="nav-link" href="/about">
                    {props.aboutText}
                  </a>
                </li>
              </ul>
                <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
                </div>
          
            </div>
          </div>
        </nav>
      </>
    );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "TextUtils", 
    aboutText : "About TextUtils"
}

export default Navbar; 