import React from "react";
import PropTypes from "prop-types";

import { SitemapPreviewSection } from "../../components/Sitemap";

const SitemapPreview = ({ entry, widgetFor, getAsset }) => {

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
    <SitemapPreviewSection
      title={data.title}
      sitemapList={data.sitemapList}
      copyright={data.copyright}
      preview={true}
    />
  );

};

SitemapPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default SitemapPreview;
