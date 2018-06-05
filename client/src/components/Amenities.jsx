import PropTypes from 'prop-types';
import React from 'react';


const Amenities = props => (
  <div id="amenities" style={props.border}><h1>Amenities</h1>
    {
      props.amenities.items.map(item => (
        <div key={item.category_head}><h3>{item.category_head}</h3>
          {
            item.category_items.map(categoryItem => (
              <div key={categoryItem.amenity_description}>
                <h4>{categoryItem.amenity_description}</h4>
                <p>{categoryItem.supplemental_description}</p>
              </div>
            ))
          }
        </div>
      ))
    }
  </div>);

Amenities.propTypes = {
  amenities: PropTypes.shape({
    id: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({
      category_head: PropTypes.string,
      category_items: PropTypes.arrayOf(PropTypes.shape({
        amenity_description: PropTypes.string,
        supplemental_description: PropTypes.string,
      })),
    })),
  }),
  border: PropTypes.shape({
    border: PropTypes.string,
  }),
};

Amenities.defaultProps = {
  amenities: {
    id: 1,
    items: [
      {
        category_head: 'String',
        category_items: [
          {
            amenity_description: 'String',
            supplemental_description: 'String',
          },
        ],
      },
    ],
  },
  border: {
    border: 'solid black 1px',
  },
};

export default Amenities;