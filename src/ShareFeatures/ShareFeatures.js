import copy from "copy-to-clipboard";
import "./ShareFeatures.sass";
import React, { useState, useEffect } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button, Tooltip } from "@mui/material";

const ShareFeatures = ({ editedImgURL }) => {
  const [copied, setCopied] = useState("copy");

  function copyFeedback(editedImgURL) {
    copy(editedImgURL);
    setCopied("copied");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied("copy");
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="share-features">
      <label className="share-features__url-preview">
        <p className="share-features__url-preview-label">
          Url&nbsp;Preview&nbsp;–&nbsp;
        </p>
        <div className="share-features__url-preview-content-wrapper">
          <code className="share-features__url-preview-content">
            {editedImgURL}
          </code>
        </div>
      </label>
      <Tooltip
        title={copied}
        // adds tooltip on mobile
        enterTouchDelay={0}
      >
        <Button variant="contained" onClick={() => copyFeedback(editedImgURL)}>
          <ContentCopyIcon color="primary" />
        </Button>
      </Tooltip>
      <Tooltip title="Open in new tab">
        <Button
          variant="contained"
          href={editedImgURL}
          target="_blank"
          rel="noreferrer noopener"
        >
          <OpenInNewIcon />
        </Button>
      </Tooltip>
    </div>
  );
};

export default ShareFeatures;
