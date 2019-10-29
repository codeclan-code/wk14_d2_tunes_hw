import React from 'react';

const TuneDetail = (props) => {
  if (!props.tune) return null;
  return (
    <h3>{props.tune.name}</h3>
  );
}

export default TuneDetail;
