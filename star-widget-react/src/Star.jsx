import * as React from "react";
const Star = ({ isFilled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 122.88 117.19"
    width={122.88}
    height={116.864}
    className={`star ${isFilled ? "color-filled" : ""}`}
  >
    <title>{"black-star"}</title>
    <path d="m64.39 2 15.72 36.76L120 42.33a3.2 3.2 0 0 1 1.83 5.59L91.64 74.25l8.92 39a3.2 3.2 0 0 1-4.87 3.4L61.44 96.19l-34.35 20.54a3.2 3.2 0 0 1-4.76-3.46l8.92-39L1.09 47.92A3.2 3.2 0 0 1 3 42.32l39.74-3.56L58.49 2a3.2 3.2 0 0 1 5.9 0Z" />
  </svg>
);
export default Star;
