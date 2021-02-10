import React from "react";
import PropTypes from "prop-types";

import { ServicesSection } from "../../components/home/Services";

const ServicesPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('services')) {
    if(data.services) {
      data.services.map(service => {
        var getImage = getAsset(service.image);
        service.image = getImage.toString();
        return service;
      });
    }
  }

  return (
    <ServicesSection
      title={data.title}
      description={data.description}
      services={data.services}
      preview={true}
    />
  );

};

ServicesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ServicesPreview;
