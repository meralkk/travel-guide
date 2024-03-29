import React, { useState, useEffect } from "react";
import "./Dresden.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import dresden from "./dresden.jpg";

const Dresden = () => {
  const [weatherData, setWeatherData] = useState(null);
  const weatherApiKey = "f69ab875b5a843e8a0206b26d896e043";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=40.604446&lon=-95.657771&appid=${weatherApiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <>
      {" "}
      <Container className="city-container">
        <Row>
          <Col xs={12} md={8}>
            <div className="city-title">DRESDEN</div>
            {weatherData && (
              <div className="weather">
                {weatherData.weather[0].description}
              </div>
            )}
          </Col>
        </Row>



      </Container>

      <div className="parallax-container">
        <div
          className="parallax"
          style={{ backgroundImage: `url(${dresden})` }}
        ></div>
      </div>
      <Container>
        <Row>
          <Col>
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
        condimentum magna. Nunc pulvinar sagittis dapibus. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin
        porttitor mi risus, at vestibulum magna pulvinar nec. Aenean rutrum
        velit blandit sem elementum iaculis. Pellentesque vitae metus nunc.
        Quisque ipsum quam, tristique pretium magna a, suscipit iaculis lorem.
        Donec hendrerit odio nec diam condimentum, quis tempor nunc venenatis.
        Etiam sodales vitae justo quis molestie. Nunc eleifend sollicitudin
        libero, vel sagittis nisi sollicitudin eu. Curabitur varius, metus ac
        congue fringilla, nisl eros porttitor magna, ac interdum leo est sed
        turpis. Ut vulputate lectus eget dignissim placerat. Maecenas finibus
        nisl orci, a pretium neque fringilla sed. Proin sollicitudin sit amet
        leo placerat mattis. Donec eu erat non lectus tincidunt commodo eget sit
        amet enim. Morbi erat nisi, vestibulum ut urna vitae, cursus egestas
        odio. Aliquam eleifend pretium enim. Cras quis felis velit. Ut dignissim
        nisl a augue lacinia, scelerisque mollis leo finibus. Cras vel eros in
        orci dapibus condimentum in id nisl. Etiam finibus lacus a nulla
        pulvinar finibus. Etiam et congue ante. Proin ultrices enim nibh.
        Praesent nec urna enim. Fusce sit amet risus lorem. Nullam lacinia nisl
        ut urna suscipit eleifend. Nullam venenatis ipsum vel venenatis posuere.
        Nam hendrerit erat enim, vitae cursus metus tincidunt volutpat. Nulla
        quis dui eget sem laoreet volutpat. Donec malesuada quis ante vel
        tincidunt. Donec ultricies velit vel lacus iaculis, ut pharetra ante
        ornare. Donec blandit metus sed augue elementum iaculis. Mauris at
        dignissim elit, vitae ullamcorper ligula. Donec vestibulum cursus mi nec
        vestibulum. Pellentesque iaculis, nisl at tincidunt dapibus, ipsum
        mauris luctus turpis, ut accumsan orci libero sed felis. Phasellus
        sagittis mattis dui et pellentesque. Quisque non felis augue. Integer eu
        tincidunt nibh. Integer dapibus lacinia enim eget vestibulum. Aenean
        libero urna, dictum tristique aliquam sit amet, congue sit amet velit.
        Nam quis elit metus. Duis ex turpis, faucibus eget sollicitudin nec,
        pellentesque non nulla. Suspendisse et pulvinar sem. Aenean dolor orci,
        malesuada ut mauris ut, dictum maximus nulla. Nunc laoreet, nulla in
        mattis porttitor, ligula enim pulvinar nulla, eget pretium felis ligula
        nec libero. In sed vehicula orci, in commodo justo. Vestibulum
        consectetur lorem in ipsum semper ullamcorper. Mauris eget quam non
        augue auctor commodo. Proin pharetra elit ac tortor ultrices varius.
        Vivamus et euismod lacus. Quisque pretium augue nibh, et imperdiet nunc
        iaculis quis. Donec lectus lorem, luctus blandit blandit quis, facilisis
        non leo. Fusce quam diam, commodo sit amet laoreet quis, lobortis a
        diam. Etiam et rhoncus purus.ğ
      </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dresden;
