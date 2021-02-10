import React from "react";
import PropTypes from "prop-types";

import { ClientsSection } from "../../components/home/Clients";

const ClientsPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('clients')) {
    if(data.clients) {
      data.clients.map(client => {
        var getImage = getAsset(client.image);
        client.image = getImage.toString();
        return client;
      });
    }
  }

  return (
    <ClientsSection
      title={data.title}
      description={data.description}
      clients={data.clients}
      preview={true}
    />
  );

};

ClientsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ClientsPreview;
