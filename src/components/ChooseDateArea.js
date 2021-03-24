import React from "react";

function ChooseDateArea({ changeDate }) {
  return (
    <div style={{ display: "flex", marginLeft: "10%" }}>
      <h4 style={{ color: "white" }}>Choose a specific date </h4>
      <div style={{ width: "50%", marginTop: "20px", marginLeft: "20px" }}>
        <input
          type="date"
          id="start"
          name="trip-start"
          min="2020-01-01"
          max="2021-12-31"
          onChange={(e) => {
            changeDate(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default ChooseDateArea;
