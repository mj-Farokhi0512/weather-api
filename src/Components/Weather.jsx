import React from "react";
import "./styles/weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { fetchData } from "../redux/weather/actions";
import { connect } from "react-redux";
import CurrentWeather from "./current/CurrentWeather";
import axios from "axios";
import Forecasts from "./forecast/Forecasts";
import DayForecast from "./dayforecast/DayForecast";
import HourForecast from "./dayforecast/HourForecast";

const inputRef = React.createRef();
const weather = React.createRef();

class Weather extends React.Component {
  render() {
    return (
      <div className="weather" ref={weather}>
        {!this.props.data.dayLoadFlag && (
          <div>
            <CurrentWeather />
            <Forecasts />
          </div>
        )}
        {this.props.data.dayLoadFlag && (
          <div>
            <DayForecast />
            <HourForecast />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url) => dispatch(fetchData(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
