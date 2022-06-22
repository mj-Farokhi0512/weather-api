import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Forecast from "./Forecast";
import "../styles/forecast.css";

class Forecasts extends React.Component {
  render() {
    const response = this.props.data.response;

    return (
      <div className="forecasts">
        {/* <Container className="d-flex justify-content-between">
          <div className="next p-3">بعدی</div>
          <div className="previous p-3">قبلی</div>
        </Container> */}
        <Container className="my-5">
          <Row>
            {response.forecast.forecastday.map((item, index) => (
              <Col xs={4} key={index}>
                <Forecast dayInfo={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state,
  };
}

export default connect(mapStateToProps)(Forecasts);
