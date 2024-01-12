import React, { Component, useEffect } from "react";

export default class Pomodoro extends Component {
  render() {
    return <Timer />;
  }
}

var work = 1500000;
// var shortBreak = 300000;
// var longBreak = 900000;

var start = Date.now();
const Timer = () => {
  useEffect(() => {
    setInterval(function () {
      var delta = Date.now() - start;

      function convertMinutes(ms) {
        var minutes = Math.floor(ms / 60000);
        return minutes;
      }

      function convertSeconds(ms) {
        var seconds = ((ms % 60000) / 1000).toFixed(0);
        return seconds;
      }

      var minutes = convertMinutes(work - delta);
      var seconds = convertSeconds(work - delta);

      document.getElementById("timer").innerHTML =
        `${minutes} minutes and ${seconds} seconds left`;
    }, 100);
  }, []);
  return <p id="timer"></p>;
};
