import axios from "axios";
import {
  GET_DATA_SUCCESS,
  GET_DATA_REQUEST,
  GET_DATA_FAILURE,
  GO_TO_FORECAST,
  BACK_TO_CURRENT,
  SHOW_SEARCH_BOX,
  HIDE_SEARCH_BOX,
} from "./types";

function getDataRequest() {
  return {
    type: GET_DATA_REQUEST,
    payload: {},
  };
}

function getDataSuccess(data) {
  return {
    type: GET_DATA_SUCCESS,
    payload: { data },
  };
}

function getDataFailure(error) {
  return {
    type: GET_DATA_FAILURE,
    payload: { error },
  };
}

export function fetchData(url) {
  return (dispatch) => {
    dispatch(getDataRequest());
    axios
      .get(url, { params: { answer: 100 } })
      .then((response) => response.data)
      .then((data) => {
        dispatch(getDataSuccess(data));
      })
      .catch((error) => dispatch(getDataFailure(error)));
  };
}

export function goToForecast(data) {
  return {
    type: GO_TO_FORECAST,
    payload: {
      forecastData: data,
    },
  };
}

export function backToCurrent() {
  return {
    type: BACK_TO_CURRENT,
    payload: {},
  };
}

export function showSearchBox() {
  return {
    type: SHOW_SEARCH_BOX,
    payload: {},
  };
}

export function hideSearchBox() {
  return {
    type: HIDE_SEARCH_BOX,
    payload: {},
  };
}
