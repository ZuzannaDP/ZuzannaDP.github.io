import AboutMe from '../about/AboutMe';
import NavBar from '../navigation/Navbar';
import './Home.css';

function Home() {
  return (
    <div className="home">
        <NavBar />
        <div className='main-content'>
          <AboutMe />
        </div>
    </div>
  );
}

export default Home;
