import File from "./File";

function Folder(props) {
    return (
        <File class="folder" fileName={props.fileName} hoverFileImage="images/Folder_open.png" fileImage="images/Folder_closed.png" />
    );
}

export default Folder;