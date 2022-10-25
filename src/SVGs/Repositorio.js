import * as React from "react";

const SvgRepositorio = ({ title, titleId, ...props }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 41 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M1 27V11.833L13.429 3.6v8.233L25.857 3.6v8.233h3V8.8h1.286L31 1h4.286l.857 7.8h1.286v3.033H40V27H1Z"
      fill="#B5B5B5"
    />
    <path
      d="M28.857 11.833h-3V3.6L13.43 11.833V3.6L1 11.833V27h28.286m-.429-15.167V8.8h1.286m-1.286 3.033h8.572m0 0H40V27h-3m.429-15.167V8.8h-1.286m0 0L35.286 1H31l-.857 7.8m6 0h-6M29.286 27v-8.233H37V27m-7.714 0H37M9.571 15.3H4.43v3.9m5.142-3.9v7.8m0-7.8h5.143m-5.143 7.8H4.43v-3.9m5.142 3.9h5.143m0-7.8v7.8m0-7.8h5.143m-5.143 7.8h5.143m0-7.8H25v3.9m-5.143-3.9v7.8m0 0H25v-3.9m0 0H4.429"
      stroke="#737373"
    />
  </svg>
);

export default SvgRepositorio;
