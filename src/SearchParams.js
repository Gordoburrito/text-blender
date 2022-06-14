import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import './SearchParams.sass';
import ShareFeatures from "./ShareFeatures/ShareFeatures";


const SearchParams = () => {
  const defaultTextValue = "check out my sweet wangs"
  const [text, setText] = useState(defaultTextValue);
  const [color, setColor] = useState("9013fe");
  // const [textContentEncoded, setTextContentEncoded] = useState('')

  const handleChangeComplete = (color, event) => {
    setColor(color.hex.slice(1));
  };
  
  const extraStyling ="&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50&w=640";
  let textContentEncoded = "?txt=" + encodeURIComponent(text);
  let backgroundColor = "&blend=" + color;
  const apiParams = textContentEncoded + backgroundColor + extraStyling;
  const originalImage = `https://assets.imgix.net/examples/butterfly.jpg`
  const editedImgURL = originalImage + apiParams
  return (
    <div className="search-params">
      <ShareFeatures className="share-featuress" editedImgURL={editedImgURL}/>
      <div className="work-space">
        <div className="work-space__primary-photo-wrapper">
            <img
              className="work-space__primary-photo-image"
              src={editedImgURL}
              alt={editedImgURL}
            />
        </div>
        <form className="work-space__tool-bar">
          <TextField 
            className="tool-bar__text-input"
            id="filled-basic" 
            variant="filled" 
            label="Text Content" 
            value={text}
            defaultValue={defaultTextValue}
            onChange={(e) => setText(e.target.value)}
            onBlur={(e) => setText(e.target.value)}/> 
          <label htmlFor="background color">
            Background Color
            <SketchPicker 
              className="tool-bar__color-picker"
              disableAlpha="true" 
              color={color} 
              onChangeComplete={handleChangeComplete} />
          </label>
        </form>
      </div>
    </div>
  );
};

export default SearchParams;

// &txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50&blend=4300bb&w=640
// &txtclr=fff
//             // text-position
//             &txtalign=center%2Cmiddle
//             // text-size
//             &txtsize=48&bm=normal
//             // alpha
//             &balph=50
//             // blend??
//             &blend=4300bb
//             // width
//             &w=640
