/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line import/no-anonymous-default-export

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <nav className="navbar navbar-dark navbar-expand bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">
                <FontAwesomeIcon icon={faCalendarCheck} className="me-2" />
                TodoApp
            </a>

            <div id="navbar" className=" collapse navbar-collapse ">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/todos">
                            Tarefas
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">
                            Sobre
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
