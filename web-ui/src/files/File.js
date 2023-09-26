import { useState } from 'react';
import './files.css';

function File(props) {
    const [isHover, setIsHover] = useState(false);

    return (
      <div className={"file " + props.class}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
          <img src={isHover ? props.hoverFileImage : props.fileImage}></img>
          <p className={isHover ? "hoverFileText" : "fileText"} >{props.fileName}</p>
      </div>
    );
}

export default File;