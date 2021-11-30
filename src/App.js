import React from "react";
import { Home } from "./pages/homepage";
import { Routes, Route,Switch } from "react-router-dom";
import "./App.css";
import { About } from "./pages/aboutpage";
import { ArticlesListPage } from "./pages/articlesListPage";
import { Articlepage } from "./pages/articlepage";
import { Page404 } from "./pages/404page";

function App() {
  return (
    <Routes>
      <div className="App">
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ArticlesListPage" element={<ArticlesListPage />} />
        <Route path="/Articlepage/:name" element={<Articlepage />} />
        <Route path="*" element={<Page404 />} />
        </Switch>
      </div>
    </Routes>
  );
}

export default App;
