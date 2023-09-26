import Folder from "../files/Folder";

function Title() {
    return (
        <p id="title">Zuzanna Poniatowska</p>
    )
}

function NavBar() {
    return (
        <div id="navbar">
            <Folder fileName={"About me"} />
            <Folder fileName={"Skills"} />
            <Folder fileName={"Projects"} />
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