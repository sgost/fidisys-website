import React from "react";
import PropTypes from "prop-types";

import { WorksSection } from "../../components/home/Works";

const HomeWorksPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('works')) {
    if(data.works) {
      data.works.map(work => {
        var getImage = getAsset(work.image);
        work.image = getImage.toString();
        return work;
      });
    }
  }

  return (
    <WorksSection
      title={data.title}
      works={data.works}
      preview={true}
    />
  );

};

HomeWorksPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HomeWorksPreview;
