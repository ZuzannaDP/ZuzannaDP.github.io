import { useState } from 'react';
import './files.css';

function File(props) {
    const [isHover, setIsHover] = useState(false);

    return (
      <div className={"file " + props.class}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
          <img className={props.disabled ? "disabled" : "not-disabled"} 
               src={isHover && !props.disabled ? props.hoverFileImage : props.fileImage}
          ></img>
          <p className={isHover || props.disabled ? "hoverFileText" : "fileText"} >{props.fileName}</p>
      </div>
    );
}

export default File;