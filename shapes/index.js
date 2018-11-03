import PropTypes from 'prop-types';


export const ImageSource = PropTypes.oneOfType([
  PropTypes.shape({
    uri: PropTypes.string.isRequired,
  }),
  PropTypes.number.isRequired,
]).isRequired;
