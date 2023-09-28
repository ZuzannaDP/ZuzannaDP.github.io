import { useState } from 'react';
import './files.css';

export const IMAGE_FOLDER = process.env.PUBLIC_URL + "/images/";

export function File(props) {
    const [isHover, setIsHover] = useState(false);

    return (
      <div className={"file " + props.class + (props.disabled ? " disabled" : "")}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
          <img src={IMAGE_FOLDER + (isHover && !props.disabled ? props.hoverFileImage : props.fileImage)}
          ></img>
          <p className={isHover && !props.disabled ? "hoverFileText" : "fileText"} >{props.fileName}</p>
      </div>
    );
}

export default File;