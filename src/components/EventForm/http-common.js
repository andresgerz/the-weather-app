import axios from "axios";
import $ from 'jquery';

export default axios.create({
  baseURL: "http://weather-api.lndo.site",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': '*',
    
  }
});