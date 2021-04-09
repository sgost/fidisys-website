import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { ViewCasestudy } from "../../components/Casestudy";

const WorksPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  var image = entry.getIn(['data', 'appLogo']);
  var getImage = getAsset(image);

  if(getImage) {
    var appLogoImage = getImage.toString();
  }

  //banner image
  var banImage = entry.getIn(['data', 'bannerImage']);
  var getBanImage = getAsset(banImage);

  if(getBanImage) {
    var bannerImage = getBanImage.toString();
  }

  //banner background image
  var banBgImage = entry.getIn(['data', 'bannerBackgroundImage']);
  var getBanBgImage = getAsset(banBgImage);

  if(getBanBgImage) {
    var bannerBg = getBanBgImage.toString();
  }

  return (
    <Fragment>
      {
        Object.keys(data).length !== 0 &&
        <ViewCasestudy
          title={data.title}
          description={data.description}
          appLogo={appLogoImage}
          bannerImage={bannerImage}
          bannerBackgroundImage={bannerBg}
          review={data.review}
          html={widgetFor('body')}
          preview={true}
        />
      }
    </Fragment>
  );

};

WorksPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default WorksPreview;
