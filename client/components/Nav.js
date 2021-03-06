import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Nav(props) {
  return (
    <nav className="nav" role="navigation" title="main-navigation">
      <ul className="nav__items-left" title="project-menu">
        <li className="nav__item">
          <a
            className="nav__new"
            onClick={props.newProject}
          >
            New
          </a>
        </li>
        <li className="nav__item">
          <a
            className="nav__save"
            onClick={props.saveProject}
          >
            Save
          </a>
        </li>
        {(() => { // eslint-disable-line
          if (props.project.id) {
            return (
              <li className="nav__item">
                <a className="nav__clone" onClick={props.cloneProject}>
                  Duplicate
                </a>
              </li>
            );
          }
        })()}
        {(() => { // eslint-disable-line
          if (props.project.id) {
            return (
              <li className="nav__item">
                <a className="nav__export" onClick={props.exportProjectAsZip}>
                  Download
                </a>
              </li>
            );
          }
        })()}
        {(() => { // eslint-disable-line
          if (props.project.id) {
            return (
              <li className="nav__item">
                <Link to={`/full/${props.project.id}`} target="_blank">
                  Fullscreen
                </Link>
              </li>
            );
          }
        })()}
        {(() => { // eslint-disable-line
          if (props.user.authenticated) {
            return (
              <li className="nav__item">
                <p className="nav__open">
                  <Link
                    to="/sketches"
                    onClick={props.stopSketch}
                  >
                    Open
                  </Link>
                </p>
              </li>
            );
          }
          return (
            <li className="nav__item">
              <p className="nav__open">
                <Link to="/p5/sketches">
                  Open
                </Link>
              </p>
            </li>
          );
        })()}
        <li className="nav__item">
          <p className="nav__about">
            <Link to="/about">
              About
            </Link>
          </p>
        </li>
      </ul>
      <ul className="nav__items-right" title="user-menu">
        {(() => {
          if (!props.user.authenticated) {
            return (
              <li className="nav__item">
                <p>
                  <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
                </p>
              </li>
            );
          }
          return (
            <li className="nav__item">
              <a>Hello, {props.user.username}!</a>
              <ul className="nav__dropdown">
                <li>
                  <Link to="/sketches">
                    My Sketches
                  </Link>
                </li>
                <li>
                  <a onClick={props.logoutUser} >
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          );
        })()}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  newProject: PropTypes.func.isRequired,
  saveProject: PropTypes.func.isRequired,
  exportProjectAsZip: PropTypes.func.isRequired,
  cloneProject: PropTypes.func.isRequired,
  user: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    username: PropTypes.string
  }).isRequired,
  project: PropTypes.shape({
    id: PropTypes.string
  }),
  logoutUser: PropTypes.func.isRequired,
  stopSketch: PropTypes.func.isRequired
};

export default Nav;
