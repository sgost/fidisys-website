import React from "react";
import PropTypes from "prop-types";

import { TestimonialsSection } from "../../components/Testimonials";

const TestimonialsPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.hasOwnProperty('customers')) {
    if(data.customers) {
      data.customers.map(customer => {
        var getImage = getAsset(customer.image);
        customer.image = getImage.toString();
        return customer;
      });
    }
  }

  return (
    <TestimonialsSection
      title={data.title}
      customers={data.customers}
      preview={true}
    />
  );

};

TestimonialsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default TestimonialsPreview;
