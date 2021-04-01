import React from "react";
import PropTypes from "prop-types";

import { PartnerSection } from "../../components/Services/Partner";

const PartnerPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  var image = entry.getIn(['data', 'image']);
  var getImage = getAsset(image);

  if(getImage) {
    var bannerImage = getImage.toString();
  }

  return (
    <PartnerSection
      helpText={data.helpText}
      image={bannerImage}
      html={widgetFor('body')}
      preview={true}
    />
  );

};

PartnerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PartnerPreview;
