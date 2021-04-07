import React from "react";
import PropTypes from "prop-types";

import { FidishowSection } from "../../components/About/Fidishow";

const FidishowPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  var image = entry.getIn(['data', 'image']);
  var getImage = getAsset(image);

  if(getImage) {
    var bannerImage = getImage.toString();
  }

  //author
  var authorImage = entry.getIn(['data', 'showAuthor']);
  var getAuthorImage = getAsset(authorImage);

  if(getAuthorImage) {
    var authImg = getAuthorImage.toString();
  }

  //logo
  var logo = entry.getIn(['data', 'pfLogo']);
  var getLogo = getAsset(logo);

  if(getLogo) {
    var platformLogo = getLogo.toString();
  }

  return (
    <FidishowSection
      title={data.title}
      helpText={data.helpText}
      showAuthor={authImg}
      pfLogo={platformLogo}
      navId={data.navId}
      link={data.link}
      image={bannerImage}
      html={widgetFor('body')}
      preview={true}
    />
  );

};

FidishowPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default FidishowPreview;
