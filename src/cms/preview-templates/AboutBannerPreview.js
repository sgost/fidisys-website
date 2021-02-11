import React from "react";
import PropTypes from "prop-types";

import { AboutBannerSection } from "../../components/About/Banner";

const AboutBannerPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  var image = entry.getIn(['data', 'image']);
  var getImage = getAsset(image);

  if(getImage) {
    var bannerImage = getImage.toString();
  }

  return (
    <AboutBannerSection
      description={data.description}
      image={bannerImage}
      preview={true}
    />
  );

};

AboutBannerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default AboutBannerPreview;
