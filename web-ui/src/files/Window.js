import { IMAGE_FOLDER } from "../files/File";

function Window(props) {
    let sides = Array(props.height).fill(
    <div style={{width: props.width * 64 + 128}} className="window-sides">
        <img className="window-left" src={IMAGE_FOLDER + "Window_left.png"}></img>
        <img className="window-right" src={IMAGE_FOLDER + "Window_right.png"}></img>
    </div>)
    let up = Array(props.width).fill(<img className="window-up" src={IMAGE_FOLDER + "Window_up.png"}></img>)
    let down = Array(props.width).fill(<img className="window-down" src={IMAGE_FOLDER + "Window_down.png"}></img>)

    return (
        <div style={{width: props.width * 64 + 128}} 
             className={"window" + (props.isTextWindow ? " text-window" : "")}>
            <div style={{width: props.width * 64 + 128}} 
                 className="content-wrapper">
                <div className="content">
                    {props.content}
                </div>
            </div>
            <div className="border">
                <div style={{height: 64}}>
                    <img src={IMAGE_FOLDER + "Window_upleft.png"}></img>
                    {up}   
                    <img src={IMAGE_FOLDER +"Window_upright.png"}></img> 
                </div>

                {sides}
                
                <div style={{height: 64}}>
                    <img src={IMAGE_FOLDER + "Window_downleft.png"}></img>
                    {down}
                    <img src={IMAGE_FOLDER + "Window_downright.png"}></img> 
                </div>
            </div>
        </div>
    );
}

export default Window;