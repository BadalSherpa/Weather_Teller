import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../common/Error";
import { Spin, Button } from "antd";

/**
 * @author
 * @function Weather
 **/

const Weather = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  const [iconCode, setIconCode] = useState("");

  useEffect(() => {
    let ignore = false;
    const fetchProduct = async () => {
      setLoading(true);
      try {
        setError(false);
        const response = await axios(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            props.location +
            "&units=metric" +
            "&appid=" +
            "28ed2c46c8acdc29953d126a4426b671"
        );
        // process.env.NEXT_PUBLIC_WEB_API
        if (!ignore) {
          setData(response.data);
          setIconCode(response.data.weather[0].icon);
        }
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchProduct();
    return () => {
      ignore = true;
    };
  }, []);

  var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

  return error ? (
    <div>
      <Error location={props.location} />
    </div>
  ) : loading ? (
    <div>
      <Spin size='large' style={{ margin: "5% 50%" }} />
    </div>
  ) : (
    <>
      <div
        style={{
          textAlign: "center",
          margin: "10vh 10vw",
          color: "green",
          fontSize: "2rem",
        }}
      >
        <div>
          <img
            src={iconUrl}
            style={{ height: "20vh" }}
            alt='weather-teller-icon'
          ></img>
        </div>
        The temperature at{" "}
        <span style={{ color: "pink", fontWeight: "bold" }}>{data.name}</span>{" "}
        is {data.main.temp} degree celcious. It's {data.weather[0].description}
        {console.log(data)}
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          style={{ margin: "2vh 2vw", backgroundColor: "lightgreen" }}
          href='/'
          size='large'
        >
          Check Weather Again
        </Button>
      </div>
    </>
  );
};

export default Weather;
