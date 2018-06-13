import React from "react";

import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "4da13827f89d780929fef24ba2413bba";
class App extends React.Component{
  getWeather = async () => {
    const api_call =  await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=4da13827f89d780929fef24ba2413bba`);
  }
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
      );
  }
};

export default App;