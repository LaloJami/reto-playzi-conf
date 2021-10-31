import React from 'react';
import Map from '../components/Map';
import { useAddress } from '../hooks/useAddress';
import initialState from '../initialState';

const TestAddress = () => {
  const buyer = initialState.buyer
  const location = useAddress(buyer[0].address);
  console.log((location && Object.keys(location).length))
  return (
    <div className="Success-map">
      {location && Object.keys(location).length!==0?<Map data={location} />:"Espere un momento"}
    </div>
  );
};

export {TestAddress};