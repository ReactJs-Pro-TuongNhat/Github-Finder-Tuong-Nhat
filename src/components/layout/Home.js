import { Routes, Route } from "react-router-dom";
import Search from "../users/Search";
import About from "../pages/About";
import User from "../users/User";
import NotFound from "../pages/NotFound";

const Home = () => {
    return(
        <div className="container">
          <Routes >
            <Route exact path="/" element={<Search />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/user/:id" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes >
        </div>
    );
}
export default Home;