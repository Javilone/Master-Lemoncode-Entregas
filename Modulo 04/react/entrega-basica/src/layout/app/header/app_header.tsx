import React from "react";
import { Link } from "react-router-dom";

import "../header/app_header_styles.css";

export const AppHeader: React.FC = () => {
  return (
    <>
      <a href="/">
        <div className="app-style">
          <h1>Master Front End XVI - Módulo 4.1</h1>
          <h3>Frameworks - React Laboratorio</h3>
        </div>
      </a>
    </>
  );
};
