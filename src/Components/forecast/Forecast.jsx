import { connect } from "react-redux";
import { goToForecast } from "../../redux/weather/actions";
import { NumberConvertor } from "../Convertors";

function Forecast(props) {
  return (
    <div
      className="forecast text-center"
      onClick={() => {
        props.goToForecast(props.dayInfo);
      }}
    >
      <span className="forecast-temp d-inline-block mt-1">
        <sup>°</sup>
        {NumberConvertor(props.dayInfo.day.avgtemp_c)}
      </span>
      <br />
      <img
        src={props.dayInfo.day.condition.icon}
        style={{ width: "30px", hegiht: "30px" }}
      />
      <br />
      <span className="forecast-day">
        {new Date(props.dayInfo.date).toLocaleDateString("fa-IR")}
      </span>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    goToForecast: (data) => dispatch(goToForecast(data)),
  };
}

export default connect(null, mapDispatchToProps)(Forecast);
