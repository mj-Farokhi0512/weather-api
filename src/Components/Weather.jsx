import React from "react";
import "./styles/weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import axios, { AxiosError } from "axios";

const inputRef = React.createRef();
const weather = React.createRef();

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      responseFlag: false,
    };
    this.onSearchEntered = this.onSearchEntered.bind(this);
    this.apiCall = this.apiCall.bind(this);
  }

  apiCall(url) {
    axios
      .get(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          this.setState({ response: response.data, responseFlag: true });
        }
      })
      .catch(() => console.log("Error"));
  }

  componentDidMount() {
    this.apiCall(
      "https://api.weatherapi.com/v1/current.json?key=58f188f5c1464abc9b6181321220205&q=tehran&aqi=yes"
    );
  }

  onSearchEntered(e) {
    const input = inputRef.current;
    if (e.key === "Enter") {
      let url = `https://api.weatherapi.com/v1/current.json?key=58f188f5c1464abc9b6181321220205&q=${input.value}&aqi=yes`;
      this.apiCall(url);
    }
  }

  render() {
    return (
      <div className="weather" ref={weather}>
        <Container>
          <Row>
            <Col className="mx-auto mt-5">
              {this.state.responseFlag && (
                <div className="text-center">
                  <h1 className="text-center">
                    {this.state.response.location.name},
                    {this.state.response.location.country}
                  </h1>
                  <h6 className="text-center">
                    {this.state.response.location.localtime}
                  </h6>
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={9} className="mx-auto mt-5">
              <input
                type="search"
                value={this.state.searchInput}
                ref={inputRef}
                className=" form-control"
                onKeyPress={this.onSearchEntered}
              />
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto mt-5">
              {this.state.responseFlag && (
                <div className="text-center">
                  <img
                    src={this.state.response.current.condition.icon}
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h2 className="text-center ps-4" style={{ fontSize: "80px" }}>
                    {this.state.response.current.temp_c}
                    <sup>
                      c<sup>&#9702;</sup>
                    </sup>
                  </h2>
                  <h2 className="text-center">
                    {this.state.response.current.condition.text}
                  </h2>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Weather;
