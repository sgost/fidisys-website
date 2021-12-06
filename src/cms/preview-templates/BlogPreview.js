import React from "react";
import PropTypes from "prop-types";
import moment  from 'moment';

import { BlogPost } from "../../components/Blog";

const BlogPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.date) {
    var date = moment(data.date).format("MMMM DD YYYY")
  }

  var image = entry.getIn(['data', 'profile']);
  var getImage = getAsset(image);

  if(getImage) {
    var profile = getImage.toString();
  }


  var image2 = entry.getIn(['data', 'preview_image']);
  var getImage2 = getAsset(image2);

  if(getImage2) {
    var previewImage = getImage2.toString();
  }

  return (
    <BlogPost
      profile={profile}
      preview_image={previewImage}
      author={data.author}
      bio={data.bio}
      linkdin={data.linkdin}
      date={date}
      title={data.title}
      html={widgetFor('body')}
      preview={true}
    />
  );

};

BlogPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default BlogPreview;
