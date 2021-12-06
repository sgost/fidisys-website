import React from "react";
import PropTypes from "prop-types";

import { Family } from "../../components/About/Family";

const FamilyPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('members')) {
    if(data.members) {
      data.members.map(member => {
        var getImage = getAsset(member.image);
        member.image = getImage.toString();
        return member;
      });
    }
  }

  return (
    <Family
    title={data.title}
    cardsdata={data.members}
    />
  );

};

FamilyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default FamilyPreview;
