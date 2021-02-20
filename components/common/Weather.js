import React, { useState, useEffect, Fragment } from "react";
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

  useEffect(() => {
    let ignore = false;
    const fetchProduct = async () => {
      setLoading(true);
      try {
        setError(false);
        const response = await axios(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            props.location +
            "&appid=Process.env"
        );
        if (!ignore) setData(response.data);
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

  return error ? (
    <div>
      <Error location={props.location} />
    </div>
  ) : loading ? (
    <div>
      <Spin size='large' style={{ margin: "50% 30%" }} />
    </div>
  ) : (
    <>
      <div style={{ textAlign: "center", margin: "10vh 10vw" }}>
        The temperature at {data.name} is {data.main.temp} degree celcious. It's{" "}
        {data.weather[0].description}
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          style={{ margin: "2vh 2vw", backgroundColor: "lightgreen" }}
          href='/'
        >
          Check Weather Again
        </Button>
      </div>
    </>
  );
};

export default Weather;
