"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

var data = {
  type: "line",
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
  ],
  datasets: [
    {
      label: "Growth",
      fill: true,
      backgroundColor: "transparent",
      borderColor: "#17c788",
      data: [0, 150, 450, 400, 480, 630, 580, 500, 530, 400, 430, 600, 400],
    },
  ],
};

export function PropertyCharts() {
  return (
    <div className="col-md-12 col-xl-6">
      <div className="property-overview border rounded bg-white p-30 mb-20">
        <h5 className="mb-4">Property Views</h5>
        <form
          className="form-boder rounded quick-search form-icon-right p-0 mb-2"
          action="#"
          method="post"
        >
          <div className="row g-3">
            <div className="col">
              <select>
                <option>Yearly</option>
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
              </select>
            </div>
            <div className="col">
              <select>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
              </select>
            </div>
            <div className="col">
              <button className="btn btn-primary w-100">Go</button>
            </div>
          </div>
        </form>
        {/* Visitor data */}
        <div
          className="tab-pane tab-hide"
          id="visit-panel-1"
          style={{ display: "block" }}
        >
          {/* <canvas
            ref={ref}
            id="propertychart"
            className="w-100 mt-3"
            height={500}


          /> */}

          <div className="mt-4">
            <Line data={data} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
