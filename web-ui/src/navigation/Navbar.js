import Folder from "../files/Folder";

function Title() {
    return (
        <p id="title">Zuzanna Poniatowska</p>
    )
}

function NavBar() {
    return (
        <div id="navbar">
            <Folder fileName={"About me"} disabled={false} />
            <Folder fileName={"Skills"} disabled={true} />
            <Folder fileName={"Projects"} disabled={false} />
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