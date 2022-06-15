import { Autocomplete, FormControl, InputLabel, Menu, MenuItem, Select, TextField } from "@mui/material";
import { width } from "@mui/system";
import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import AspectRatioOptions from "./AspectRatioOptions";
import './SearchParams.sass';
import ShareFeatures from "./ShareFeatures/ShareFeatures";


const SearchParams = () => {
  const defaultTextValue = "check out my sweet wangs"
  const [text, setText] = useState(defaultTextValue);
  const [fontSize, setFontSize] = useState('36');
  const [color, setColor] = useState("9013fe");
  const [aspectRatio, setAspectRatio] = useState('')
  const [imageWidth, setImageWidth] = useState('640')

  const handleColorChangeComplete = (color, event) => {
    setColor(color.hex.slice(1));
  };

  let textContentEncodedURL = "?txt=" + encodeURIComponent(text);
  let fontSizeURL = "&txt-size=" + fontSize;
  let backgroundColorURL = "&blend=" + color;
  let aspectRatioURL = "&ar=" + aspectRatio + "&fit=crop";
  let widthURL = "&w=" + imageWidth
  const extraStyling ="&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50";
  const apiParams = textContentEncodedURL + fontSizeURL + backgroundColorURL + aspectRatioURL + widthURL + extraStyling;
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
            label="Aspect Ratio"
            value={aspectRatio}
            onChange={(e) => setAspectRatio(e.target.value)}
            onBlur={(e) => setAspectRatio(e.target.value)}/>
            {/* TODO: Set up error handling for values < 0 */}
          <TextField
            className="tool-bar__text-input"
            id="filled-basic" 
            variant="filled" 
            label="Image Width"
            value={imageWidth}
            onChange={(e) => setImageWidth(e.target.value)}
            onBlur={(e) => setImageWidth(e.target.value)}/>
            <FormControl variant="filled">
              <InputLabel id="demo-simple-select-filled-label">Aspect Ratio Presets</InputLabel>
              <Select
                value={aspectRatio}
                onChange={(e) => {
                  setAspectRatio(e.target.value)
                  const widthRegex = /(\d+)/
                  let width = e.target.value.match(widthRegex)[0]
                  setImageWidth(width)
                }}
              >
                <MenuItem value={'1200:675'}>1200:675 – Twitter Post</MenuItem>
                <MenuItem value={'1500:500'}>1500:500 – Twitter header</MenuItem>
                <MenuItem value={'1200:630'}>1200:630 – Facebook Post</MenuItem>
                <MenuItem value={'820:312'}>820:312 – Facebook Cover</MenuItem>
                <MenuItem value={'400:300'}>400:300 – Dribbble shot</MenuItem>
                <MenuItem value={'1080:1080'}>1080:1080 – Instagram Post</MenuItem>
              </Select>
            </FormControl>

          <TextField 
            className="tool-bar__text-input"
            id="filled-basic" 
            variant="filled" 
            label="Text Content" 
            value={text}
            // defaultValue={defaultTextValue}
            onChange={(e) => setText(e.target.value)}
            onBlur={(e) => setText(e.target.value)}/> 
          <TextField 
            className="tool-bar__text-input"
            id="filled-basic" 
            variant="filled"
            label="Font Size" 
            value={fontSize}
            // defaultValue={defaultTextValue}
            onChange={(e) => setFontSize(e.target.value)}
            onBlur={(e) => setFontSize(e.target.value)}/> 
          <label htmlFor="background color">
            Background Color
            <SketchPicker 
              className="tool-bar__color-picker"
              disableAlpha="true" 
              color={color} 
              onChangeComplete={handleColorChangeComplete} />
          </label>
        </form>
      </div>
    </div>
  );
};

export default SearchParams;