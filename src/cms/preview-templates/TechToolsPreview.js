import React from "react";
import PropTypes from "prop-types";

import { ToolsSection } from "../../components/Services/Tools";

const ToolsPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('technologies')) {
    if(data.technologies) {
      data.technologies.map(tool => {
        var getImage = getAsset(tool.image);
        tool.image = getImage.toString();
        return tool;
      });
    }
  }

  return (
    <ToolsSection
      title={data.title}
      technologies={data.technologies}
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
