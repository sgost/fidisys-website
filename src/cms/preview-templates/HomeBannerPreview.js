import React from "react";
import PropTypes from "prop-types";

import { HomeBannerSection } from "../../components/home/Banner";

const HomeBannerPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  var image = entry.getIn(['data', 'image']);
  var getImage = getAsset(image);

  if(getImage) {
    var bannerImage = getImage.toString();
  }

  return (
    <HomeBannerSection
      description={data.description}
      image={bannerImage}
    />
  );

};

HomeBannerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HomeBannerPreview;
