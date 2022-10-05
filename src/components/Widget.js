import React from "react";
import { useEffect, useState } from "react";
import clouds from "./clouds.jpg";

export default function Widget(props) {
  const [data, setData] = useState([]);
  const [Weather, setWeather] = useState([]);
  const [Temp, setTemp] = useState();
  const [Wind, setWind] = useState();
  const [Humidity, setHumidity] = useState();
  const [Pressure, setPressure] = useState();
  const [loading, setLoading] = useState(false);

  //callback function
  const getData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.name}&appid=6bfd53dae8439ed4c7a233308a1793f2`;
    let Data = await fetch(url);
    let parsedData = await Data.json();
    console.log(parsedData);
    setData(parsedData);
    setWeather(parsedData.weather);
    setTemp(parsedData.main.temp);
    setWind(parsedData.wind.speed);
    setHumidity(parsedData.main.humidity);
    setPressure(parsedData.main.pressure);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    // getData();
    // const getData = () => {
    //   fetch("data.json", {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //   })
    //   // fetch(url)
    //     .then(function (response) {
    //       console.log(response);
    //       return response.json();
    //     })
    //     .then(function (myJson) {
    //       console.log(myJson);
    //       setData(myJson);
    //     });
    // };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // let a = /\d+ . +d/;

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    // eslint-disable-next-line
    var s = Math.floor((d % 3600) % 60);

    // var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    // var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return h + ":" + m;
  }

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <>
      <div>
        
        <section style={{ backgroundColor: "4B515D" }}>
        <div className="d-flex justify-content-center align-items-center text-light mt-2"><h1>Know the Weather of your Country/City Today!</h1></div>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-6 col-xl-4">
                <div
                  className="card"
                  style={{ color: "4B515D", borderRadius: "35px" }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex">
                      <h6 className="flex-grow-1">{data.name}</h6>
                      <h6>{secondsToHms(data.timezone)}</h6>
                    </div>

                    <div className="d-flex flex-column text-center mt-5 mb-4">
                      <h6
                        className="display-4 mb-0 font-weight-bold"
                        style={{ color: "1C2331" }}
                      >
                        {" "}
                        {(Temp - 273).toFixed(2)}°C{" "}
                      </h6>
                      <span className="small" style={{ color: "868B94" }}>
                        {Weather.map((item) => {
                          return <div key={item.id}>{item.main}</div>;
                        })}
                      </span>
                      <span className="small" style={{ color: "868B94" }}>
                        {Weather.map((item) => {
                          return item.description;
                        })}
                      </span>
                    </div>

                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                        <div>
                          <i
                            className="fas fa-wind fa-fw"
                            style={{ color: "868B94" }}
                          ></i>{" "}
                          <span className="ms-1">{Wind} (kts)</span>
                        </div>
                        <div>
                          <i
                            className="fas fa-tint fa-fw"
                            style={{ color: "868B94" }}
                          ></i>{" "}
                          <span className="ms-1">{Humidity}%</span>
                        </div>
                        <div>
                          <i
                            className="fas fa-sun fa-fw"
                            style={{ color: "868B94" }}
                          ></i>{" "}
                          <span className="ms-1">{Pressure} hpa</span>
                        </div>
                      </div>
                      <div>
                        <img
                          // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" //1051x912
                          src={clouds}
                          width="100px"
                          alt="clouds"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
