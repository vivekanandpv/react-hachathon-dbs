import React from 'react';
import { useParams } from 'react-router-dom';

const CustomerDetail = (props) => {
  const { id } = useParams();

  return (
    <>
      <h4>Customer Detail: {id}</h4>
    </>
  );
};

export default CustomerDetail;
