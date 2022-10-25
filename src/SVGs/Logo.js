import * as React from "react";

const SvgLogo = ({ title, titleId, ...props }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 29 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.79.714.29 14.304a1 1 0 0 0-.29.705v13.777a1 1 0 0 0 .286.7l13.5 13.784a1 1 0 0 0 1.428 0l13.5-13.784a1 1 0 0 0 .286-.7V15.01a1 1 0 0 0-.29-.704L15.21.715a1 1 0 0 0-1.42 0Zm.006 14.602-5.768 5.89a1 1 0 0 0-.01 1.39l5.768 6.057a1 1 0 0 0 1.439.01l5.932-6.058a1 1 0 0 0-.01-1.409l-5.933-5.89a1 1 0 0 0-1.418.01Z"
      fill="url(#logo_svg__a)"
    />
    <defs>
      <linearGradient
        id="logo_svg__a"
        x1={14.5}
        y1={0}
        x2={14.5}
        y2={44}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FCCD33" />
        <stop offset={1} stopColor="#F2736D" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgLogo;
