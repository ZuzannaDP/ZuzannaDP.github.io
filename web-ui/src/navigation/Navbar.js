import Folder from "../files/Folder";

function NavBar() {
    return (
        <div id="navbar">
            <Folder fileName={"About me"} />
            <Folder fileName={"Skills"} />
            <Folder fileName={"Projects"} />
        </div>
    );
}

export default NavBar;