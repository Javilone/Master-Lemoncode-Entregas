import React from "react";
import { MemberSearch } from "../../pods/github_page/github_member_search";
import InputComponent from "../../pods/github_page/github_input_component";
import "../github_page/github_styles.css";

export const GitPage: React.FC = () => {
  return (
    <>
      <div className="github-page-title">
        <h1>Consulta organizaciones en GitHub</h1>
        <InputComponent />
      </div>
      <MemberSearch />
    </>
  );
};
