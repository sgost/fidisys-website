import React from "react";
import PropTypes from "prop-types";

import { ContactPreviewSection } from "../../components/Contact";

const ContactPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('contact')) {
    if(data.contact) {
      data.contact.map(service => {
        var getImage = getAsset(service.image);
        service.image = getImage.toString();
        return service;
      });
    }
  }

  return (
    <ContactPreviewSection
      title={data.title}
      contact={data.contact}
      html={widgetFor('body')}
      preview={true}
    />
  );

};

ContactPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ContactPreview;
