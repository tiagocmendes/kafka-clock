import React from 'react';
import AnalogClock from 'analog-clock-react';

let options = {
    width: "500px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#d81c7a",
      minute: "#ffffff",
      hour: "#ffffff"
    }
};

function Clock() {
    return (
        <div>
            <AnalogClock {...options} />
        </div>
    );
}

export default Clock;
