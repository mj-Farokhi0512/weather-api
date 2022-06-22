import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { NumberConvertor, ConditionConvert } from "../Convertors";
import "bootstrap";
// import "bootstrap-icons";
import "../styles/hourforecast.css";
import axios from "axios";

function HourForecast(props) {
  const hours = props.data.hour;

  return (
    <div className="hour-forecast mt-5">
      <Container>
        <Row>
          <Col>
            <ul className="hours-list">
              {hours.map((item, index) => {
                return (
                  <li key={index}>
                    <Container>
                      <Row>
                        <Col xs={2} className="pt-3">
                          {NumberConvertor(item.temp_c)}
                          <sup>°</sup>C
                        </Col>
                        <Col xs={8} className="text-center">
                          <span className="">
                            {ConditionConvert(item.condition.text)}
                          </span>
                          <img src={item.condition.icon} />
                        </Col>
                        <Col xs={2} className="pt-3">
                          {NumberConvertor(
                            new Date(item.time).getHours() / 10 >= 1
                              ? new Date(item.time).getHours()
                              : "0" + new Date(item.time).getHours()
                          )}
                          :٠٠
                        </Col>
                      </Row>
                    </Container>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.dayLoadData,
  };
}

export default connect(mapStateToProps)(HourForecast);
