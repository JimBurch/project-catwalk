import React from 'react';
import PropTypes from 'prop-types';
import AddMore from './components/AddMore';
import Questions from './components/Questions';
import QASearchBar from './components/SearchBar';

const QAs = ({ productId, productName }) => (

  <div>
    <QASearchBar productId={productId} />
    <Questions productId={productId} />
    <AddMore productId={productId} productName={productName} />
  </div>
);

QAs.propTypes = {
  productId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  productName: PropTypes.string.isRequired,
};

export default QAs;
