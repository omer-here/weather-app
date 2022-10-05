import React from "react";
import { useState, useEffect } from "react";

export default function Testapi() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [Weather, setWeather] = useState([]);
  const [Temp, setTemp] = useState();
  const [Wind, setWind] = useState();
  const [Humidity, setHumidity] = useState();
  const [Pressure, setPressure] = useState();

  //callback function

  useEffect(() => {
    // getData();
    setLoading(true);
    const getData = async () => {
      // fetch("data.json", {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      // })
      // // fetch(url)
      //   .then(function (response) {
      //     console.log(response);
      //     return response.json();
      //   })
      //   .then(function (myJson) {
      //     console.log(myJson);
      //     setData(myJson);
      //   });
      let url =
        "https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=6bfd53dae8439ed4c7a233308a1793f2";
      let Data = await fetch(url);
      let parsedData = await Data.json();
      console.log(parsedData);

      // console.log(parsedData.weather.map((i)=>{return (i.main)}));

      setData(parsedData);
      setTemp(parsedData.main.temp);
      setWind(parsedData.wind.speed);
      setHumidity(parsedData.main.humidity);
      setPressure(parsedData.main.pressure);
      setLoading(false);
      setWeather(parsedData.weather);
    };
    getData();
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <>
      <div>
        {
          /* { data.map((item)=>{             //the url is returning an object
                 return(
                    <li>{item.name}</li>
                 )
            }
            )} */
          <li>{data.name}</li>
        }
        <span className="small" style={{ color: "868B94" }}>
          {Weather.map((item) => {
            return <div key={item.id}>{item.main}</div>;
          })}
        </span>

        <h6
          className="display-4 mb-0 font-weight-bold"
          style={{ color: "1C2331" }}
        >
          {" "}
          {(Temp - 273).toFixed(2)}°C{" "}
        </h6>
        <span className="ms-1">{Wind} (kts)</span>
        <span className="ms-1">{Humidity}%</span>
        <span className="ms-1">{Pressure} hpa</span>
      </div>
    </>
  );
}
