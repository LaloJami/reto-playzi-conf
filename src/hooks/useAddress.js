import { useState, useEffect } from "react";
import axios from 'axios';
import config from "../config";

const useAddress = address =>{
  const [map, setMap] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=${config.geoLocationApi}&query=${address}/`;

  useEffect( async () =>{
    const response = await axios(API);
    setMap(response.data.data[0]);
  }, []);
  return map;
};

export {useAddress};