export default ({ width = "15", height = "15", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${height} ${width}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7" cy="7" r="7" fill="currentColor" />
    <path d="M12 5L7 10L2 5" stroke="#307777" strokeWidth="1.5" />
  </svg>
);
