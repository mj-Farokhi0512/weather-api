import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { backToCurrent } from "../../redux/weather/actions";
import { NumberConvertor, ConditionConvert } from "../Convertors";
import "../styles/dayforecast.css";

function DayForecast(props) {
  const dayDate = new Date(props.data.date);

  return (
    <div className="day-forecast">
      <button
        className="back-to-current"
        onClick={() => {
          props.backToCurrent();
        }}
      ></button>
      <div className="forecast-info text-center">
        <div className="py-3 slide-in-left">
          <span className="daily fs-2">روزانه</span>
        </div>
        <Container className="my-2">
          <Row className="mx-5">
            <Col xs={6} className="slide-in-right">
              <span className="day-temp fs-1">
                <sup>°</sup>
                {NumberConvertor(props.data.day.avgtemp_c)}
              </span>
              <span className="day-condition fs-5">
                {ConditionConvert(props.data.day.condition.text)}
              </span>
            </Col>
            <Col xs={6} className="slide-in-left">
              <img
                src={props.data.day.condition.icon}
                className="icon-weather"
              />
            </Col>
          </Row>
          <Row>
            <Col className="slide-in-right">
              <div className="day-date fs-5 pb-1 mt-3 mb-2 mx-4 border-bottom">
                {dayDate.toLocaleDateString("fa-IR", {
                  year: "numeric",
                  day: "numeric",
                  month: "long",
                })}
              </div>
            </Col>
          </Row>
          <Row className="slide-in-left">
            <Col xs={4}>
              <i className="wi wi-hot fs-2 py-1" />
              <p>
                {NumberConvertor(props.data.day.uv)} درصد
                <br />
                اشعه فرابنفش
              </p>
            </Col>
            <Col xs={4}>
              <i className="wi wi-humidity fs-2 py-1" />
              <p>
                %{NumberConvertor(props.data.day.daily_chance_of_rain)}
                <br />
                احتمال بارش
              </p>
            </Col>
            <Col xs={4}>
              <i className="wi wi-cloudy-gusts fs-2 py-1" />
              <p>
                {NumberConvertor(props.data.day.maxwind_kph)} ساعت/کیلومتر
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
    data: state.dayLoadData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    backToCurrent: () => dispatch(backToCurrent()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DayForecast);
