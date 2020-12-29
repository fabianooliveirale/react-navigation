import React from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

export default (props) => {
  const paramTeste = "valueTeste";

  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to={`/param/${paramTeste}`}>Param</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/TesteNotFoundn">Not Found Teste</Link>
          </li>
          <li>
            <Link to="/useState">useState()</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect()</Link>
          </li>
          <li>
            <Link to="/useRef">useRef()</Link>
          </li>
          <li>
            <Link to="/useMemo">useMemo()</Link>
          </li>
          <li>
            <Link to="/useCallback">useCallback()</Link>
          </li>
          <li>
            <Link to="/useContext">useContext()</Link>
          </li>
          <li>
            <Link to="/useReducer">useReducer()</Link>
          </li>
          <li>
            <Link to="/useCustom">useMyHook()</Link>
          </li>
          <li>
            <Link to="/">Início</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
