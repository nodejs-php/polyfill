import * as React from "react";
const Spinner = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    preserveAspectRatio="xMidYMid"
    style={{
      background: "#fff",
      display: "block",
      shapeRendering: "auto",
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <rect width={6} height={12} x={47} y={24} fill="#985d4e" rx={3} ry={6}>
      <animate
        attributeName="opacity"
        begin="-0.9166666666666666s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={6}
      height={12}
      x={47}
      y={24}
      fill="#985d4e"
      rx={3}
      ry={6}
      transform="rotate(30 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.8333333333333334s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={6}
      height={12}
      x={47}
      y={24}
      fill="#985d4e"
      rx={3}
      ry={6}
      transform="rotate(60 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.75s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={6}
      height={12}
      x={47}
      y={24}
      fill="#985d4e"
      rx={3}
      ry={6}
      transform="rotate(90 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.6666666666666666s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={6}
      height={12}
      x={47}
      y={24}
      fill="#985d4e"
      rx={3}
      ry={6}
      transform="rotate(120 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.5833333333333334s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={6}
      height={12}
      x={47}
      y={24}
      fill="#985d4e"
      rx={3}
      ry={6}
      transform="rotate(150 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.5s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={6}
      height={12}
      x={47}
      y={24}
      fill="#985d4e"
      rx={3}
      ry={6}
      transform="rotate(180 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.4166666666666667s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={6}
      height={12}
      x={47}
      y={24}
      fill="#985d4e"
      rx={3}
      ry={6}
      transform="rotate(210 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.3333333333333333s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={6}
      height={12}
      x={47}
      y={24}
      fill="#985d4e"
      rx={3}
      ry={6}
      transform="rotate(240 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.25s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={6}
      height={12}
      x={47}
      y={24}
      fill="#985d4e"
      rx={3}
      ry={6}
      transform="rotate(270 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.16666666666666666s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={6}
      height={12}
      x={47}
      y={24}
      fill="#985d4e"
      rx={3}
      ry={6}
      transform="rotate(300 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.08333333333333333s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={6}
      height={12}
      x={47}
      y={24}
      fill="#985d4e"
      rx={3}
      ry={6}
      transform="rotate(330 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="0s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
  </svg>
);
export default Spinner;
