import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext'
import Map from '../components/Map';
import { useAddress } from '../hooks/useAddress';
import '../styles/components/Success.css'
// import MapG from '../components/MapG';

const Success = () => {
  const {state:{buyer} } = useContext(AppContext);
  const location = useAddress(buyer[0].address);
  //Usando google
  //const location = useGoogleAddress(buyer[0].address);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirreccion</span>
        <div className="Success-map">
        {location && Object.keys(location).length!==0?<Map data={location} />:"Espere un momento"}
        {/* {location && Object.keys(location).length!==0?<MapG data={location} />:"Espere un momento"} */}
        </div>
      </div>
    </div>
  );
};

export {Success};