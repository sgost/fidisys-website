import React from "react";
import PropTypes from "prop-types";

import { TechBannerSection } from "../../components/Technologies/Banner";

const TechBannerPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  var image = entry.getIn(['data', 'image']);
  var getImage = getAsset(image);

  if(getImage) {
    var bannerImage = getImage.toString();
  }

  return (
    <TechBannerSection
      description={data.description}
      image={bannerImage}
      preview={true}
    />
  );

};

TechBannerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default TechBannerPreview;
