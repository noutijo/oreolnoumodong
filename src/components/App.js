import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Menu from "./layouts/Menu";
import PageNoFound from "./layouts/PageNoFound";
import Home from "./Home";
import MainWorks from "./MainWorks";
import MainSkills from "./MainSkills";
import MainBlog from "./MainBlog";
import MainHireMe from "./hire/MainHireMe";
import Subscribe from "./blog/Subscribe";

function App() {

  return (
    <BrowserRouter>
      <div className="center-content">
        <Menu />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/skills" exact element={<MainSkills />} />
          <Route path="/works" exact element={<MainWorks />} />
          <Route path="/blog" exact element={<MainBlog />} />
          <Route path="/hire" exact element={<MainHireMe />} />
          <Route path="/subscribe" exact element={<Subscribe />} />
          <Route path="*" exact element={<PageNoFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
