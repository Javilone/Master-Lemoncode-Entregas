import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InitPage } from "../../scenes/init/init";
import { ListPage } from "../../list";
import { DetailPage } from "../../scenes/details/detail";
import { GitPage } from "../../scenes/github_page/github_page";
import { InputProvider } from "../context/github_page_context/github_context";

export const AppRouter: React.FC = () => {
  return (
    <InputProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitPage />}></Route>
          <Route path="/github_members" element={<GitPage />}></Route>
          <Route path="/list" element={<ListPage />}></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
          <Route path="/*" element={<h1>404 NOOOT FOUND!</h1>}></Route>
          {/* <Route path="/*" element={<Navigate to="/" />}></Route> */}
        </Routes>
      </BrowserRouter>
    </InputProvider>
  );
};
