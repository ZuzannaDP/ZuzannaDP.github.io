import { IMAGE_FOLDER } from "../files/File";
import Folder from "../files/Folder";
import { Link } from 'react-router-dom';

function Title() {
    var now = new Date();
    var datetime = now.toLocaleTimeString()

    return (
        <div id="title">
            <img src={IMAGE_FOLDER + "House.png"}></img>
            <div>
                <p>Zuzanna's Home</p>
                <p>{datetime}</p>
            </div>
        </div>
    )
}

function NavBar() {
    return (
        <div id="navbar">
            <Link to="/">
                <Folder fileName={"About me"} disabled={false} />
            </Link>
            <Folder fileName={"Skills"} disabled={true} />
            <Link to="/projects/">
                <Folder fileName={"Projects"} disabled={false} />
            </Link>
        </div>
    );
}

function Header() {
    return (
        <div id="header">
            <Title />
            <NavBar />
        </div>
    )
}

export default Header;