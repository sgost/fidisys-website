import React from "react";
import PropTypes from "prop-types";

import { HighlightsSection } from "../../components/About/Highlights";

const HighlightsPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('highlights')) {
    if(data.highlights) {
      data.highlights.map(highlight => {
        var getImage = getAsset(highlight.image);
        highlight.image = getImage.toString();
        return highlight;
      });
    }
  }

  return (
    <HighlightsSection
      title={data.title}
      description={data.description}
      highlights={data.highlights}
      preview={true}
    />
  );

};

HighlightsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HighlightsPreview;
