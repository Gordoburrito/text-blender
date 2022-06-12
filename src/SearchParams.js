import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";

const SearchParams = () => {
  const [text, setText] = useState("check out my sweet wangs");
  const [color, setColor] = useState("9013fe");
  // const [textContentEncoded, setTextContentEncoded] = useState('')

  const handleChangeComplete = (color, event) => {
    setColor(color.hex.slice(1));
  };
  
  const extraStyling ="&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50&w=640";
  let textContentEncoded = "?txt=" + encodeURIComponent(text);
  let backgroundColor = "&blend=" + color;
  const apiParams = textContentEncoded + backgroundColor + extraStyling;
  return (
    <div>
      <form>
        <label htmlFor="text">
          Input text
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={(e) => setText(e.target.value)}
          ></input>
          <label htmlFor="background color"></label>
          Color
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            onBlur={(e) => setColor(e.target.value)}
          ></input>
        </label>
        <SketchPicker color={color} disableAlpha="true" onChangeComplete={handleChangeComplete} />
      </form>
      <img
        className="primary-photo"
        src={`https://assets.imgix.net/examples/butterfly.jpg${apiParams}`}
        alt={"text"}
      />
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
