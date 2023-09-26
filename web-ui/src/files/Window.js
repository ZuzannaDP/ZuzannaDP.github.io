function Window(props) {
    let sides = Array(props.height).fill(
    <div style={{width: props.width * 64 + 128}} className="window-sides">
        <img className="window-left" src="images/Window_left.png"></img>
        <img className="window-right" src="images/Window_right.png"></img>
    </div>)
    let up = Array(props.width).fill(<img className="window-up" src="images/Window_up.png"></img>)
    let down = Array(props.width).fill(<img className="window-down" src="images/Window_down.png"></img>)

    return (
        <div className="window">
            <div className="content">
                {props.content}
            </div>
            <div className="border">
                <div style={{height: 64}}>
                    <img src="images/Window_upleft.png"></img>
                    {up}   
                    <img src="images/Window_upright.png"></img> 
                </div>

                {sides}
                
                <div style={{height: 64}}>
                    <img src="images/Window_downleft.png"></img>
                    {down}
                    <img src="images/Window_downright.png"></img> 
                </div>
            </div>
        </div>
    );
}

export default Window;