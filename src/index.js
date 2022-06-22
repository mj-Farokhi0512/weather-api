import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuer,
  gql,
} from "@apollo/client";

// const Client = new ApolloClient({
//   uri: `http://api.weatherapi.com/v1/forecast.json?key=dd2950216df846d7ae250508221505&q=ilam&days=3&aqi=yes&alerts=no`,
//   cache: new InMemoryCache(),
// });

// Client.query({
//   query: gql`
//     {
//       location {
//         name
//       }
//     }
//   `,
// }).then((response) => console.log(response));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
