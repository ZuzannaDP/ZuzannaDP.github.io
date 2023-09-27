import File from "./File";

function Folder(props) {
    return (
        <File class="folder" 
        fileName={props.fileName} 
        hoverFileImage="Folder_open.png" 
        fileImage="Folder_closed.png" 
        disabled={props.disabled}
        />
    );
}

export default Folder;