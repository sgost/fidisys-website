import React from "react";
import PropTypes from "prop-types";

import { FooterSection } from "../../components/Footer";

const FooterPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  var image = entry.getIn(['data', 'image']);
  var getImage = getAsset(image);

  if(getImage) {
    var footerImage = getImage.toString();
  }

  if(data.hasOwnProperty('mediaLinks')) {
    if(data.mediaLinks) {
      data.mediaLinks.map(link => {
        var getImage = getAsset(link.image);
        link.image = getImage.toString();
        return link;
      });
    }
  }

  return (
    <FooterSection
      title={data.title}
      image={footerImage}
      mediaLinks={data.mediaLinks}
      copyright={data.copyright}
      preview={true}
    />
  );

};

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default FooterPreview;
