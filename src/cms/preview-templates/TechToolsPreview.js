import React from "react";
import PropTypes from "prop-types";

import { ToolsSection } from "../../components/Technologies/Tools";

const ToolsPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('tools')) {
    if(data.tools) {
      data.tools.map(tool => {
        var getImage = getAsset(tool.image);
        tool.image = getImage.toString();
        return tool;
      });
    }
  }

  return (
    <ToolsSection
      title={data.title}
      tools={data.tools}
      preview={true}
    />
  );

};

ToolsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ToolsPreview;
