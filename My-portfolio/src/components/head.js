/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ userInfo }) => (
  <Helmet title={userInfo.name} >
    <html lang="en" />
    <meta name="description" content={userInfo.name} />
    <meta property="og:title" content={userInfo.heroPara} />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
