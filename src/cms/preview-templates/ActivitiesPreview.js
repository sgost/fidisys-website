import React from "react";
import PropTypes from "prop-types";

import { ActivitiesSection } from "../../components/About/Activities";

const ActivitiesPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('activities')) {
    if(data.activities) {
      data.activities.map(activity => {
        var getImage = getAsset(activity.image);
        activity.image = getImage.toString();
        return activity;
      });
    }
  }

  return (
    <ActivitiesSection
      activities={data.activities}
      preview={false}
    />
  );

};

ActivitiesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ActivitiesPreview;
