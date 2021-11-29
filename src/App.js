import React from "react";
import { Home } from "./pages/homepage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./pages/aboutpage";
import { ArticlesListPage } from "./pages/articlesListPage";
import { Articlepage } from "./pages/articlepage";
import { Page401 } from "./pages/401page";

function App() {
  return (
    <Routes>
      <div className="App">
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ArticlesListPage" element={<ArticlesListPage />} />
        <Route path="/Articlepage/:name" element={<Articlepage />} />
        <Route path="*" element={<Page401 />} />
      </div>
    </Routes>
  );
}

export default App;
