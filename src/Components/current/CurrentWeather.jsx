import React from "react";
import { connect } from "react-redux";
import "../styles/current_weather.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import {
  fetchData,
  hideSearchBox,
  showSearchBox,
} from "../../redux/weather/actions";
import { NumberConvertor, ConditionConvert } from "../Convertors";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../weather-icons-master/css/weather-icons.css";
import "../../weather-icons-master/css/weather-icons-wind.css";

function CurrentWeather(props) {
  const response = props.data.response;

  const searchInput = React.useRef();
  const currentWeather = React.useRef();

  function changeWindDir(wind_dir) {
    if (wind_dir === "N") {
      return "شمالی";
    } else if (wind_dir.includes("NW")) {
      return "شمال غربی";
    } else if (wind_dir.includes("NE")) {
      return "شمال شرقی";
    } else if (wind_dir === "W") {
      return "غربی";
    } else if (wind_dir === "S") {
      return "جنوبی";
    } else if (wind_dir === "E") {
      return "شرقی";
    } else if (wind_dir.includes("SW")) {
      return "جنوب غربی";
    } else if (wind_dir.includes("SE")) {
      return "جنوب شرقی";
    }
  }

  function searchWeather(e) {
    if (e.key === "Enter") {
      props.fetchData(
        `http://api.weatherapi.com/v1/forecast.json?key=dd2950216df846d7ae250508221505&q=${searchInput.current.value}&days=3&aqi=yes&alerts=no`
      );

      currentWeather.current.classList.remove("blur");
      searchInput.current.classList.remove("slide-down");
      searchInput.current.classList.add("slide-up");
      setTimeout(() => {
        props.hideSearchBox();
      }, 400);
    }
  }

  return (
    <div
      className="current-weather"
      onClick={() => {
        if (props.data.showSearchFlag) {
          searchInput.current.classList.remove("slide-down");
          searchInput.current.classList.add("slide-up");
          currentWeather.current.classList.remove("blur");
          setTimeout(() => {
            props.hideSearchBox();
          }, 400);
        }
      }}
    >
      <button
        className="btn-search"
        onClick={(e) => {
          // e.stopPropagation();
          props.showSearchBox();
          setTimeout(() => {
            searchInput.current.focus();
          }, 100);
          currentWeather.current.classList.add("blur");
        }}
      ></button>
      {props.data.showSearchFlag && (
        <input
          className="search-box form-control slide-down"
          ref={searchInput}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onKeyPress={(e) => searchWeather(e)}
          type="search"
        />
      )}

      <div ref={currentWeather}>
        <div className="slide-in-left">
          <span className="location">{response.location.name}</span>
          <br />
          <span className="current-time fs-5">
            {new Date(response.location.localtime).toLocaleString("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <br />
          <button
            className="btn-update"
            onClick={() => {
              props.fetchData(
                `http://api.weatherapi.com/v1/forecast.json?key=dd2950216df846d7ae250508221505&q=${response.location.name}&days=3&aqi=yes&alerts=no`
              );
            }}
          >
            بروزرسانی
          </button>
        </div>

        <img
          src={response.current.condition.icon}
          style={{
            width: "200px",
            height: "200px",
            transform: "translateX(200%)",
          }}
          className="slide-in-right"
        />

        <div className="condition-group mx-5 py-3 my-2 slide-in-right">
          <span className="temp fs-1">
            <sup>°</sup>
            {NumberConvertor(response.current.temp_c)}
          </span>
          <br />
          <span className="condition-text fs-4">
            {ConditionConvert(response.current.condition.text)}
          </span>
        </div>

        <Container className="slide-in-left">
          <Row>
            <Col xs={4}>
              <i className="wi wi-hot fs-1 py-1" />
              <p>
                {NumberConvertor(response.current.uv)} درصد
                <br />
                اشعه فرابنفش
              </p>
            </Col>
            <Col xs={4}>
              <i className="wi wi-na fs-1 py-1" />
              <p>
                <sup>°</sup>
                {NumberConvertor(response.current.wind_degree)}
                <br />
                {changeWindDir(response.current.wind_dir)}
              </p>
            </Col>
            <Col xs={4}>
              <i className="wi wi-cloudy-gusts fs-1 py-1" />
              <p>
                {NumberConvertor(response.current.wind_kph)} کیلومتر/ساعت
                <br />
                سرعت باد
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url) => dispatch(fetchData(url)),
    showSearchBox: () => dispatch(showSearchBox()),
    hideSearchBox: () => dispatch(hideSearchBox()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
