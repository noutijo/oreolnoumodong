import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import MainProjects from "./MainProjects";
import MainSkills from "./MainSkills";
import MainBlog from "./MainBlog";

function App() {

  return (
    <BrowserRouter>
      <div className="center-content">
        <Menu />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/skills" exact element={<MainSkills />} />
          <Route path="/projects" exact element={<MainProjects />} />
          <Route path="/blog" exact element={<MainBlog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
