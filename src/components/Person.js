import React from "react";
import PropTypes from "prop-types";

const Person = ({ person: { image, name, address, age } }) => {
  return (
    <article>
      <img src={image} alt="person" />
      <h4>Name: {name}</h4>
      <h4>Adress: {address}</h4>
      <h5>Age: {age || 18}</h5>
    </article>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
  /* image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired, */
};

export default Person;
