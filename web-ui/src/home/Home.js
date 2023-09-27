import AboutMe from '../about/AboutMe';
import NavBar from '../navigation/Navbar';
import Projects from '../projects/Projects';
import './Home.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <BrowserRouter>
        <NavBar />
        <div className='main-content'>
          <Routes>
            <Route exact path='/' element={<AboutMe />}></Route>
            <Route exact path='/projects' element={<Projects />}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default Home;
