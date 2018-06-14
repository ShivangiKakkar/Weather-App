import React from "react";

const Weather = props => (
  <div>
      	{ props.city && props.country && <p>Location: { props.city}, { props.country}</p>}
      	{ props.temperature && <p>Temperature: { props.temperature} °C  ( Max: {props.temperature_max} °C , Min: {props.temperature_min} °C)</p>}
      	{ props.humidity && <p>Humidity: { props.humidity}</p>}
      	{ props.description && <p>Conditions: { props.description}</p>}
      	{ props.error &&  <p>{ props.error}</p>}

  </div>

	);
  
//stateless_component


    
  

export default Weather;
