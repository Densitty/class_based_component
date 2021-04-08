import React from "react";
import PropTypes from "prop-types";

const Person = (props) => {
  return (
    <article>
      <img src={props.image} alt="person" />
      <h4>{props.name}</h4>
      <h4>{props.address}</h4>
      <h5>{props.age}</h5>
    </article>
  );
};

Person.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  age: PropTypes.number,
};

export default Person;
