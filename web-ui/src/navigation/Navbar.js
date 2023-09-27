import Folder from "../files/Folder";
import { Link } from 'react-router-dom';

function Title() {
    return (
        <p id="title">Zuzanna Poniatowska</p>
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