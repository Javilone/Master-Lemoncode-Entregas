import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InitPage } from "../../scenes/init/init";
import { DetailPage } from "../../scenes/git_details/git_details";
import { GitPage } from "../../scenes/git_page/git_page";
import { InputProvider } from "../context/git_context/github_context";
import { RickPage } from "../../scenes/rick&morty_page/rick_page";
import { DetailRickMorty } from "../../scenes/rick&morty_details/rick_details";

export const AppRouter: React.FC = () => {
  return (
    <InputProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitPage />}></Route>
          <Route path="/github_members" element={<GitPage />}></Route>
          <Route path="/rick" element={<RickPage />}></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
          <Route path="/detail_rick/:id" element={<DetailRickMorty />}></Route>
          <Route path="/*" element={<h1>404 NOOOT FOUND!</h1>}></Route>
          {/* <Route path="/*" element={<Navigate to="/" />}></Route> */}
        </Routes>
      </BrowserRouter>
    </InputProvider>
  );
};
